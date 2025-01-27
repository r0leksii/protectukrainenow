import Image from 'next/image'
import { Container } from '@/app/_components'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="relative w-full h-[100px] bg-transparent z-50">
      {/* <Image
        className="object-cover object-center"
        src="/header-bg-1.jpg"
        alt="Background"
        fill
        priority
        sizes="100vw"
        quality={90}
      />
      <div className="absolute inset-0 bg-[#004080]/50" /> */}
      <Container className="relative h-full flex items-center justify-between">
        <Link href="/">
          <Image
            src="/pun-logo-horizontal-light.svg"
            alt="Logo"
            width={300}
            height={62}
            className="w-auto h-auto"
          />
        </Link>
      </Container>
    </header>
  )
}
