import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CardIssuesContainer = styled(NavLink)`
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 2rem;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: ${(props) => props.theme['base-title']};

    > strong {
      flex: 1;
      font-size: 1.25rem;
      line-height: 160%;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }

    > p {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-span']};
    }

    @media (max-width: 480px) {
      flex-direction: column;
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const Content = styled.div`
  margin-top: 1.25rem;
  color: ${(props) => props.theme['base-text']};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;

  font-weight: 400;
  line-height: 160%;
`
