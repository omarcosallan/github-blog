import { ReactNode, AnchorHTMLAttributes } from 'react'
import { ExternalLinkContainer } from './styles'

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  to: string
}

export function ExternalLink({ children, to }: ExternalLinkProps) {
  return <ExternalLinkContainer to={to}>{children}</ExternalLinkContainer>
}
