import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GithubContext, Issue } from '../../../../context/GithubContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CardProfileContainer, InfoIssue, Title } from './styles'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment'
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons/faCalendarDay'
import { ExternalLink } from '../../../../components/ExternalLink'

interface IssueInfoProps {
  issue: Issue
}

export function PostInfo({ issue }: IssueInfoProps) {
  const { user } = useContext(GithubContext)

  const createdAt = formatDistanceToNow(new Date(issue.created_at), {
    addSuffix: true,
    locale: ptBR,
  }).replace('há cerca de', 'Há')

  return (
    <CardProfileContainer>
      <header>
        <ExternalLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          Voltar
        </ExternalLink>
        <ExternalLink to={issue.html_url} target="_blank">
          Ver no Github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </ExternalLink>
      </header>

      <div>
        <Title>{issue.title}</Title>

        <InfoIssue>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarDay} />
            {createdAt}
          </p>
          <p>
            <FontAwesomeIcon icon={faComment} />
            {issue.comments} comentários
          </p>
        </InfoIssue>
      </div>
    </CardProfileContainer>
  )
}
