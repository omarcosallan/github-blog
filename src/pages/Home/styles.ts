import styled from 'styled-components'

export const HomeContainer = styled.div`
  max-width: 864px;
  margin: 0 auto;
  margin-bottom: 8rem;
`

export const IssuesList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`
