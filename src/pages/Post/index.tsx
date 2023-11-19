import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { PostInfo } from './components/CardProfile'
import { Issue } from '../../context/GithubContext'
import { api } from '../../lib/axios'

import { PostContainer } from './styles'
import { PostContent } from '../../components/PostContent'

export function Post() {
  const [issue, setIssue] = useState<Issue>({} as Issue)
  const [isLoading, setIsLoading] = useState(true)

  const { id } = useParams()

  const issueDetails = useCallback(async () => {
    const response = await api.get(
      `repos/omarcosallan/github-blog/issues/${id}`,
    )

    setIssue(response.data)

    setIsLoading(false)
  }, [id])

  useEffect(() => {
    issueDetails()
  }, [issueDetails])

  return (
    <PostContainer>
      {!isLoading && (
        <>
          <PostInfo issue={issue} />
          <PostContent content={issue.body} />
        </>
      )}
    </PostContainer>
  )
}
