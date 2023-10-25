import Head from 'next/head'
import ButtonComponents from '@/components/button'
import InputComponents from '@/components/input'
import StatChakra from '@/components/stats-chakra'
import { FiSidebar } from 'react-icons/fi'
import SimpleSidebar from '@/components/sidebar'
import WithSpeechBubbles from '@/components/avis_client'

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SimpleSidebar></SimpleSidebar>
        <WithSpeechBubbles></WithSpeechBubbles>
      </main>
    </>
  )
}