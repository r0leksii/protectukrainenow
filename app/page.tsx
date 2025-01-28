import { Accordion, Container, Section } from '@/app/_components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="w-full">
      <Section className="relative text-white h-screen mt-[-100px]">
        <Image
          src="/hero-bkg.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-[#004080]/50" />
        <Container className="flex flex-col h-full justify-center gap-8">
          <h1 className="text-5xl font-bold text-balance z-10">
            Fund Ukraine&apos;s Military,<br/>End Wasteful Aid
          </h1>
          <p className="text-2xl text-balance z-10">
            Exposing Corruption and Bias to Prioritize Military Support
            <br /> and Secure Ukraine&apos;s Future.
          </p>
        </Container>
      </Section>
      {/* <Section>
        <Container className="flex flex-col items-center justify-center gap-8 pt-16">
          <Image
            src="/hero-img.jpg"
            alt="Background"
            width={1284}
            height={754}
            className="w-full h-auto"
          />
        </Container>
      </Section> */}
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8 pt-16">
          <h2 className="text-6xl font-bold ">Mission:</h2>
          <p className="text-2xl text-center">
            Our mission is to ensure that U.S. aid to Ukraine is used
            effectively to support its defense capabilities and long-term
            stability. Current programs are not achieving their goals and may
            even be counterproductive. We aim to{' '}
            <span className="font-bold">
              redirect funds from ineffective projects to the Ukrainian military
            </span>
            , enhancing its ability to defend the country from aggression.
          </p>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-6xl font-bold">Goals:</h2>
          <ul className="text-2xl list-disc list-inside">
            <li>
              To <span className="font-bold">redirect the $482 million</span> in
              2025 USAID funding, and other funds, to directly strengthen the
              Ukrainian military .
            </li>
            <li>
              To{' '}
              <span className="font-bold">
                end funding for ineffective anti-corruption programs
              </span>{' '}
              that have not decreased corruption in Ukraine.
            </li>
            <li>
              To{' '}
              <span className="font-bold">end funding for media programs</span>{' '}
              that have demonstrated biased and partisan propaganda.
            </li>
            <li>
              To{' '}
              <span className="font-bold">
                promote transparency and accountability
              </span>{' '}
              in the allocation of US aid to Ukraine.
            </li>
            <li>
              To{' '}
              <span className="font-bold">
                prevent the spread of russian aggression
              </span>{' '}
              and protect the security interests of the United States and its
              allies. security interests of the United States and its allies.
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-6xl font-bold">Issues:</h2>
          <ul className="text-2xl list-disc list-inside">
            <li>
              <span className="font-bold">
                Ineffective Anti-Corruption Efforts:
              </span>{' '}
              Despite U.S. support, corruption in Ukraine persists, with
              numerous scandals involving luxury car sales, military food
              procurement, and misuse of funds.
            </li>
            <li>
              <span className="font-bold">Biased Media Coverage:</span>{' '}
              U.S.-funded media outlets in Ukraine have been found to engage in
              one-sided propaganda, misrepresenting political figures and
              promoting partisan views, rather than objective reporting.
            </li>
            <li>
              <span className="font-bold">Misuse of Humanitarian Aid:</span>{' '}
              Significant amounts of humanitarian aid have been embezzled, with
              evidence of organized theft by high-ranking officials.
            </li>
            <li>
              <span className="font-bold">Human Rights Abuses:</span> There are
              credible reports of human rights abuses, including illegal
              detentions, torture, and beatings, within Ukrainian government
              institutions, and a lack of appropriate response from human rights
              organizations.
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8">
          <h2 className="text-6xl font-bold ">
            Why Redirecting Aid is Crucial:
          </h2>
          <ul className="text-2xl list-disc list-inside">
            <li>
              A russian victory in Ukraine would have far-reaching negative
              consequences. Russia could become emboldened to further expand its
              influence in other countries, increasing global tensions.
            </li>
            <li>
              The US must not appear weak on the international stage, which
              could encourage other adversarial nations.
            </li>
            <li>
              The current trajectory of US aid is not maximizing its intended
              impact. By prioritizing military support, the U.S. can help
              Ukraine secure its own future.
            </li>
          </ul>
        </Container>
      </Section>
      <Section>
        <Container className="flex flex-col items-center justify-center gap-8 pt-16">
          <h2 className="text-6xl font-bold">FAQ</h2>
          <Accordion />
        </Container>
      </Section>
    </main>
  )
}
