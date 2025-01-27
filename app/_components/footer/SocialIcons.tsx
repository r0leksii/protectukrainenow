'use client'

import Link from 'next/link'
import { socialLinks } from '@/lib/links'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import XIcon from '@mui/icons-material/X'

export const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2">
      <Link
        href={socialLinks.find(link => link.name === 'facebook')?.url ?? '#'}
      >
        <FacebookIcon fontSize="large" />
      </Link>
      <Link
        href={socialLinks.find(link => link.name === 'instagram')?.url ?? '#'}
      >
        <InstagramIcon fontSize="large" />
      </Link>
      <Link href={socialLinks.find(link => link.name === 'x')?.url ?? '#'}>
        <XIcon fontSize="large" />
      </Link>
      <Link
        href={socialLinks.find(link => link.name === 'youtube')?.url ?? '#'}
      >
        <YouTubeIcon fontSize="large" />
      </Link>
    </div>
  )
}
