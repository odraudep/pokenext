import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/PokemonCard.module.css';

export default function PokemonCard({ pokemon }) {
  return (
    <li className={styles.card}>
      <Link href={`/pokemon/${pokemon.id}`}>
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(`00${pokemon.id}`).slice(pokemon.id < 1000 ? -3 : 2)}.png`}
          alt={pokemon.name}
          width="180"
          height="180"
        />
        <header>
          <h3>{pokemon.name}</h3>
        </header>
      </Link>
    </li>
  );
}
