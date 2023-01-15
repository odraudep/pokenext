import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/Navbar.module.css';
import MenuItem from './MenuItem';

const menuItems = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
];

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <nav className="container">
        <Link href="/" className={styles.logo}>
          <Image src="/pokeball.png" alt="Pokenex" width="50" height="50" />
          <span className={styles.logo__text}>
            Poke
            <span>Next</span>
          </span>
        </Link>

        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <MenuItem key={item.label} item={item} />
          ))}
        </ul>
      </nav>
    </header>
  );
}
