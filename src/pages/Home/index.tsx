import { useContext } from 'react'
import { GithubContext } from '../../context/GithubContext'
import { CardIssue } from './components/CardIssues'
import { CardProfile } from './components/CardProfile'

import { HomeContainer, IssuesList } from './styles'

export function Home() {
  const { issues } = useContext(GithubContext)

  return (
    <HomeContainer>
      <CardProfile />

      <IssuesList>
        {issues.map((issue) => {
          return <CardIssue key={issue.id} issue={issue} />
        })}
      </IssuesList>
    </HomeContainer>
  )
}
