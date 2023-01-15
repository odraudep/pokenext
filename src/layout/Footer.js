import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const date = new Date();
  const actualYear = date.getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>
          PokeNext - Copyright &copy; {actualYear}
        </p>
      </div>
    </footer>
  );
}
