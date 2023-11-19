import styled from 'styled-components'

export const CardProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  gap: 2rem;
  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -6rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  > div {
    flex: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.theme['base-title']};

    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
  }

  a {
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
  }
`

export const Description = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;
  line-height: 160%;

  margin-top: 0.5rem;
`

export const InfoGithub = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  row-gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;

  p {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  }
`
