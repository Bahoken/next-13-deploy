import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Created By The only and unique Yves Bahoken" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <p
        style={{
          fontWeight: '900',
          fontSize: '3rem',
          textAlign: 'center'
        }}
        >We are rebuilding the website, we are coming back soon</p> 
        <Image src={`/images/Startup.png`} width={500} height={500} />
      </main>
    </>
  )
}
