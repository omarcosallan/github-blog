import styled from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  text-align: justify;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.blue};
  }

  ul {
    padding-left: 1.5rem;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  pre {
    background: ${(props) => props.theme['base-post']};
    padding: 1rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'FiraCode', monospace !important;
        line-height: 160% !important;
      }
    }
  }
`
