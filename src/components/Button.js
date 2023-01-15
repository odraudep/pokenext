import Link from 'next/link';
import styles from '@/styles/Button.module.css';

export default function Button({ href, children }) {
  return (
    <>
      {href ? (
        <Link href={href} className={styles.btn}>{children}</Link>
      ) : (
        <button type="button" className={styles.btn}>
          {children}
        </button>
      )}
    </>
  );
}
