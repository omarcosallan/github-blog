import styled from 'styled-components'

export const SearchInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin-top: 4.5rem;
  margin-bottom: 3rem;

  > header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    strong {
      font-size: 1.125rem;
      font-weight: 700;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    border: 1px solid transparent;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      color: ${(props) => props.theme['base-text']};
      border-color: ${(props) => props.theme.blue};
    }
  }
`
