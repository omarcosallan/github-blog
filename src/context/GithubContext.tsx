import { useState, useEffect, createContext, ReactNode } from 'react'
import { api } from '../lib/axios'

interface GithubProfile {
  avatar_url: string
  name: string
  login: string
  bio: string
  followers: number
  html_url: string
}

export interface Issue {
  id: number
  title: string
  body: string
  comments: number
  created_at: string
  number: number
  html_url: string
}

interface GithubProfileContext {
  user: GithubProfile
  issues: Issue[]
  searchIssues: (query: string) => Promise<void>
}

interface GithubProvider {
  children: ReactNode
}

export const GithubContext = createContext({} as GithubProfileContext)

export function GithubProvider({ children }: GithubProvider) {
  const [user, setUser] = useState({} as GithubProfile)
  const [issues, setIssues] = useState<Issue[]>([])

  async function fetchProfile() {
    const response = await api.get('users/omarcosallan')
    setUser(response.data)
  }

  async function fetchIssues() {
    const response = await api.get('search/issues', {
      params: {
        q: 'repo:omarcosallan/github-blog',
      },
    })
    setIssues(response.data.items)
  }

  async function searchIssues(query?: string) {
    const response = await api.get('/search/issues', {
      params: {
        q: `${query} repo:omarcosallan/github-blog`,
      },
    })

    setIssues(response.data.items)
  }

  useEffect(() => {
    fetchProfile()
    fetchIssues()
  }, [])

  return (
    <GithubContext.Provider value={{ user, issues, searchIssues }}>
      {children}
    </GithubContext.Provider>
  )
}
