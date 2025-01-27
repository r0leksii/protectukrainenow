type SocialLink = {
  name: 'facebook' | 'x' | 'youtube' | 'instagram'
  url: string
  label: string
}

export const socialLinks: SocialLink[] = [
  {
    name: 'facebook',
    url: 'https://www.facebook.com/ProtectUkraineNow/',
    label: 'Follow us on Facebook',
  },
  {
    name: 'x',
    url: 'https://x.com/Protect_UA_Now',
    label: 'Follow us on X',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@protectukrainenow',
    label: 'Subscribe to our YouTube channel',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/protectukrainenow/',
    label: 'Follow us on Instagram',
  },
] as const

export type SocialLinkName = (typeof socialLinks)[number]['name']
