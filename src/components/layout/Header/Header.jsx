
import { Navbar } from '@/components/shared'
import styles from './Header.module.css'
import { Logo, PrimaryButton } from '@/components/ui'

export const Header = () => {
  return (
    <header className={styles.main}>
      <Logo />
      <Navbar />
      <PrimaryButton />
    </header>
  )
}
