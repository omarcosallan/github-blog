import { Issue } from '../../../../context/GithubContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'

import { CardIssuesContainer, Content } from './styles'

interface CardIssueProps {
  issue: Issue
}

export function CardIssue({ issue }: CardIssueProps) {
  const createdAt = formatDistanceToNow(new Date(issue.created_at), {
    addSuffix: true,
    locale: ptBR,
  }).replace('há cerca de', 'Há')

  return (
    <CardIssuesContainer to={`post/${issue.number}`}>
      <header>
        <strong title={issue.title}>{issue.title}</strong>
        <p title={createdAt}>{createdAt}</p>
      </header>
      <Content>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </Content>
    </CardIssuesContainer>
  )
}
