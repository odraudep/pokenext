import Image from 'next/image';
import Button from '@/components/Button';
import styles from '@/styles/404.module.css';

export default function NotFound() {
  return (
    <div className={styles['not-found']}>
      <div className="container">
        <header>
          <h1>404</h1>
          <h2>
            This page could not be found.
          </h2>
        </header>
        <Button href="/">Return to home</Button>

        <div className={styles['imgs-decorator']}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif"
            width="40"
            height="40"
          />
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/12.gif"
            width="40"
            height="40"
          />
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/32.gif"
            width="40"
            height="40"
          />
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/82.gif"
            width="40"
            height="40"
          />
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/107.gif"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  );
}
