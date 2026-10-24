import type { DefaultTheme } from 'vitepress'

export const meta = {
  name: 'FreeStuffHub',
  description: 'A big collection of free resources on the internet!',
  hostname: 'https://thestufflist.netlify.app',
  keywords: ['stream', 'movies', 'gaming', 'reading', 'anime', 'free'],
  build: {
    api: false,
    nsfw: true
  }
}

export const socialLinks: DefaultTheme.SocialLink[] = []

export const nav: DefaultTheme.NavItem[] = []

export const sidebar: DefaultTheme.Sidebar | DefaultTheme.NavItemWithLink[] = []

export const feedback = `<a href="/feedback" class="feedback-footer">Made with ❤</a>`

export const excluded = [
  'readme.md',
  'single-page',
  'single-page.md',
  'feedback.md',
  'index.md',
  'sandbox.md',
  'startpage.md'
]

// Keep these so the build doesn’t break
export const stripSchemeAndWww = (value: string) =>
  value.replace(/^[a-z][a-z0-9+.-]*:\/\//, '').replace(/^www\./, '')

export function normalizeSearchUrl(value: string) {
  return stripSchemeAndWww(value)
}

export const commitRef = 'dev'
