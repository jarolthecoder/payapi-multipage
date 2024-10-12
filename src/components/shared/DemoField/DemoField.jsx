import { ButtonPrimary } from '@/components/ui'
import styles from './DemoField.module.css'
export const DemoField = () => {
  return (
    <form className={styles.main}>
      <div className={styles.innerContainer}>
        <input className={styles.demoInput} type="email" placeholder="Enter email address" />
        <ButtonPrimary>Schedule a Demo</ButtonPrimary>
      </div>
    </form>
  );
}