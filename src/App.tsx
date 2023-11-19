import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { GithubProvider } from './context/GithubContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <GithubProvider>
          <Router />
        </GithubProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
