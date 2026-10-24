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

export const stripSchemeAndWww = (value: string) =>
  value.replace(/^[a-z][a-z0-9+.-]*:\/\//, '').replace(/^www\./, '')

export function normalizeSearchUrl(value: string) {
  return stripSchemeAndWww(value)
}

export const commitRef = 'dev'
export const sidebar: DefaultTheme.Sidebar | DefaultTheme.NavItemWithLink[] = [
  {
    text: 'Wiki',
    collapsed: false,
    items: [
      {
        text: 'Adblocking / Privacy',
        link: '/privacy'
      },
      {
        text: 'Artificial Intelligence',
        link: '/ai'
      },
      {
        text: 'Movies / TV / Anime',
        link: '/video'
      },
      {
        text: 'Music / Podcasts / Radio',
        link: '/audio'
      },
      {
        text: 'Gaming / Emulation',
        link: '/gaming'
      },
      {
        text: 'Books / Comics / Manga',
        link: '/reading'
      },
      {
        text: 'Downloading',
        link: '/downloading'
      },
      {
        text: 'Torrenting',
        link: '/torrenting'
      },
      {
        text: 'Educational',
        link: '/educational'
      },
      {
        text: 'Android / iOS',
        link: '/mobile'
      },
      {
        text: 'Linux / macOS',
        link: '/linux-macos'
      },
      {
        text: 'Non-English',
        link: '/non-english'
      },
      {
        text: 'Miscellaneous',
        link: '/misc'
      }
    ]
  },
  {
    text: 'Tools',
    collapsed: false,
    items: [
      {
        text: 'System Tools',
        link: '/system-tools'
      },
      {
        text: 'File Tools',
        link: '/file-tools'
      },
      {
        text: 'Internet Tools',
        link: '/internet-tools'
      },
      {
        text: 'Social Media Tools',
        link: '/social-media-tools'
      },
      {
        text: 'Text Tools',
        link: '/text-tools'
      },
      {
        text: 'Gaming Tools',
        link: '/gaming-tools'
      },
      {
        text: 'Image Tools',
        link: '/image-tools'
      },
      {
        text: 'Video Tools',
        link: '/video-tools'
      },
      {
        text: 'Audio Tools',
        link: '/audio#audio-tools'
      },
      {
        text: 'Educational Tools',
        link: '/educational#educational-tools'
      },
      {
        text: 'Developer Tools',
        link: '/developer-tools'
      }
    ]
  }
]
