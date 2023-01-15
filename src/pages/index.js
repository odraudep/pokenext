import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import PokemonCard from '@/components/PokemonCard';

export async function getStaticProps() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=99&offset=0');
  const data = await response.json();

  const pokemons = data.results.map((item, index) => ({ ...item, id: index + 1 }));

  return {
    props: {
      pokemons,
    },
  };
}

export default function Home({ pokemons }) {
  return (
    <>
      <Head>
        <title>PokeNex - Home</title>
      </Head>

      <h1>Pokemons</h1>

      <ul className={styles['pokemons-list']}>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </>
  );
}
