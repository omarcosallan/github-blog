import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const ExternalLinkContainer = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  color: ${(props) => props.theme.blue};

  font-size: 0.75rem;
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;

  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom-color: ${(props) => props.theme.blue};
    transition: border 0.2s;
  }
`
