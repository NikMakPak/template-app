import Image from 'next/image'
import styles from '@/app/page.module.scss'

const Header = () => {
  return (
    <header>
      <nav>
        <div className={styles.header}>
          {/*todo: добавить иконку*/}
          <Image
            src={'/vercel.svg'}
            alt={'Logo'}
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
          <button>Account</button>
        </div>
      </nav>
    </header>
  )
}

export default Header
