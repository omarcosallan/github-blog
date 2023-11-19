import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  gap: 1.25rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -6rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Title = styled.h2`
  color: ${(props) => props.theme['base-title']};
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
`

export const InfoIssue = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  margin-top: 0.5rem;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
`
