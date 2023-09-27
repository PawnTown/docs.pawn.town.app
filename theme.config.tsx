import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

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
}

export default config
