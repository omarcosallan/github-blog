import styled from 'styled-components'
import headerBg from '../../assets/bg-header.svg'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  height: 18.5rem;
  padding-top: 4rem;

  background: url(${headerBg}) no-repeat center;
  background-size: cover;
`
