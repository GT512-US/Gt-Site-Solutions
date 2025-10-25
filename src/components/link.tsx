import NextLink from 'next/link'
import { type ComponentProps } from 'react'

type LinkProps = ComponentProps<typeof NextLink> & {
  href: string
}

export function Link({ children, ...props }: LinkProps) {
  return <NextLink {...props}>{children}</NextLink>
}

