import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const CardIssuesContainer = styled(NavLink)`
  width: 100%;
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

    max-height: 4rem;

    > strong {
      font-size: 1.25rem;
      line-height: 160%;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }

    > p {
      min-width: max-content;
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-span']};
    }
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
`

export const Content = styled.div`
  max-height: 7rem;
  margin-top: 1.25rem;
  color: ${(props) => props.theme['base-text']};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;

  font-weight: 400;
  line-height: 160%;
`
