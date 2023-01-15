import Image from 'next/image';
import styles from '@/styles/Pokemon.module.css';
import { cn } from '@/utils/attrFormatter';

export default function PokemonSolo({ pokemon }) {
  console.log(pokemon);

  return (
    <div className={styles.pokemon}>
      <div className="container">
        <h1>{pokemon.name}</h1>
        <Image
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(`00${pokemon.id}`).slice(pokemon.id < 1000 ? -3 : 2)}.png`}
          alt={pokemon.name}
          width="215"
          height="215"
        />
        <span className={styles.id}>#{pokemon.id}</span>

        <ul className={styles.types}>
          {pokemon.types.map(({ type }) => (
            <li key={type.name}>
              <span className={cn(styles.type, styles[`type--${type.name}`])}>{type.name}</span>
            </li>
          ))}
        </ul>

        <ul className={styles.specs}>
          <li>
            <h3>Height:</h3>
            <span>{pokemon.height * 10} cm</span>
          </li>
          <li>
            <h3>Weight:</h3>
            <span>{pokemon.weight / 10} Kg</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
