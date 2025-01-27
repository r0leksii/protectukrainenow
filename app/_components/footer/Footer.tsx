import { Container, Section } from '@/app/_components'
import Image from 'next/image'
import Link from 'next/link'
import { SocialIcons } from './SocialIcons'

export const Footer = () => {
  return (
    <footer className="text-[#b7b7b7] font-bold bg-[#004080] w-full min-h-[100px] flex items-center mt-auto">
      <Section>
        <Container className="flex items-center justify-between">
          <Image
            src="/pun-logo-horizontal-dark.svg"
            alt="Logo"
            width={232}
            height={37}
            className="w-auto h-auto"
          />
          <div className="flex flex-col gap-2">
            <Link className="block" href="mailto:contact@protectukrainenow.org">
              contact@protectukrainenow.org
            </Link>
            <SocialIcons />
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms of Service</Link>
          </div>
        </Container>
      </Section>
    </footer>
  )
}
