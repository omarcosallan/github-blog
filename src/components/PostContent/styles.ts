import styled from 'styled-components'

export const PostContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  align-self: stretch;
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;

  img {
    width: 100%;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme['base-title']};

    padding-top: 0.625rem;
    margin-bottom: 1rem;
  }

  strong {
    font-weight: 700;
  }

  p {
    margin-bottom: 1.875rem;
  }

  ul {
    padding-left: 1.5rem;
    margin-bottom: 1.875rem;
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
    padding: 1.25rem;
    margin-bottom: 1.875rem;

    > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;

      code {
        font-family: 'FiraCode', monospace !important;
      }
    }
  }

  blockquote {
    letter-spacing: 0.3px;
    line-height: 1.6;
    font-size: 1.25rem;
    padding: 0 60px;
    margin-bottom: 30px;
    position: relative;

    font-style: italic;

    > p {
      margin-bottom: 0;
    }

    ::before {
      content: '"';
      font-size: 4rem;
      position: absolute;
      top: 0;
      left: 0;
      line-height: 1;
    }
  }

  @media (max-width: 768px) {
    padding-inline: 0;
  }
`
