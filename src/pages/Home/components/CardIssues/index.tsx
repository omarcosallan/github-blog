import { Issue } from '../../../../context/GithubContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import Markdown from 'react-markdown'

import { CardIssuesContainer, Content } from './styles'

interface CardIssueProps {
  issue: Issue
}

export function CardIssue({ issue }: CardIssueProps) {
  function distanceToNow() {
    const distance = formatDistanceToNow(new Date(issue.created_at), {
      addSuffix: false,
      locale: ptBR,
    })

    return `Há ${distance}`.replace('cerca de ', '')
  }

  const distance = distanceToNow()

  return (
    <CardIssuesContainer to={`post/${issue.number}`}>
      <header>
        <strong title={issue.title}>{issue.title}</strong>
        <p title={distance}>{distance}</p>
      </header>
      <Content>
        <Markdown skipHtml={true}>{issue.body}</Markdown>
      </Content>
    </CardIssuesContainer>
  )
}
