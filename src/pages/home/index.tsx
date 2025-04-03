import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'

import previewImg from '../../assets/App Preview.png'
import { Container, Hero, Preview } from './styles'

export default function Home() {
  return (
    <Container>
      <Hero>
        <Heading as={'h1'}>Effortless Scheduling</Heading>
        <Text>
          Connect your calendar and allow people to book appointments during
          your available time.
        </Text>
      </Hero>
      <Preview>
        <Image
          src={previewImg}
          alt="Calendar Image"
          height={400}
          quality={100}
          priority
        />
      </Preview>
    </Container>
  )
}
