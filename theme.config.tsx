import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
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
  }
}

export default config
