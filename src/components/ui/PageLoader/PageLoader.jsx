import styles from './PageLoader.module.css';

export const PageLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}></div>
    </div>
  )
}