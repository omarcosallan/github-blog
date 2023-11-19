import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 18.5rem;
  padding-top: 4rem;
  background: ${(props) => props.theme['base-profile']};
`
