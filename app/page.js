import Image from 'next/image'
import styles from '@/app/page.module.css'

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['600', '400'],
  subsets: ['cyrillic', 'latin']
})

export default function Home() {
  return (
    <main>
      <h1 className={montserrat.className}>Hi привет</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </main>
  )
}
