import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <img src="/img/logo.png" className="h-8 dark:invert" />,
  project: {
    link: 'https://github.com/PawnTown/docs.pawn.town.app',
  },
  chat: {
    link: 'https://discord.gg/SW7dgF3nH3',
  },
  docsRepositoryBase: 'https://github.com/PawnTown/docs.pawn.town.app/blob/main',
  footer: {
    text: '© 2023 PawnTown',
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s'
      }
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://docs.pawn.town' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'PawnTown Docs'} />
        <meta property="og:img" content={frontMatter.image || ''} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Official PawnTown Platform Documentation'}
        />
      </>
    )
  }
}

export default config
