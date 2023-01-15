import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/Navbar.module.css';

export default function MenuItem({ item }) {
  const { pathname } = useRouter();
  const isCurrentPage = pathname === item.path;

  return (
    <li>
      <Link
        href={item.path}
        aria-current={isCurrentPage ? 'page' : null}
        className={isCurrentPage ? styles['menu_item--actived'] : null}
      >
        {item.label}
      </Link>
    </li>
  );
}
