import { useContext } from 'react'
import { GithubContext } from '../../../../context/GithubContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare'

import {
  CardProfileContainer,
  Description,
  InfoGithub,
  Profile,
  TitleContainer,
} from './styles'
import { ExternalLink } from '../../../../components/ExternalLink'

export function CardProfile() {
  const { user } = useContext(GithubContext)

  return (
    <CardProfileContainer>
      <img src={user.avatar_url} alt="" />
      <div>
        <Profile>
          <TitleContainer>
            <h2>{user.name}</h2>
            <ExternalLink to={user.html_url}>
              Github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </ExternalLink>
          </TitleContainer>
          <Description>{user.bio}</Description>
        </Profile>

        <InfoGithub>
          <p>
            <FontAwesomeIcon icon={faGithub} />
            {user.login}
          </p>
          <p>
            <FontAwesomeIcon icon={faUserGroup} />
            {user.followers} seguidores
          </p>
        </InfoGithub>
      </div>
    </CardProfileContainer>
  )
}
