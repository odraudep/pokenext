import { useRouter } from 'next/router';
import Head from 'next/head';
import PokemonSolo from '@/components/PokemonSolo';
import { toPropercase } from '@/utils/strFormatter';

export async function getStaticProps(context) {
  const { params: { pokemonId } } = context;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  const pokemon = await response.json();

  return {
    props: {
      pokemon,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=99&offset=0');
  const data = await response.json();

  const paths = data.results.map((_, index) => ({
    params: {
      pokemonId: (index + 1).toString(),
    },
  }));

  return {
    paths, fallback: true,
  };
}

export default function Pokemon({ pokemon }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Pokemon</title>
        </Head>

        <div>Loading...</div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Pokemon - {toPropercase(pokemon.name)}</title>
      </Head>

      <PokemonSolo pokemon={pokemon} />
    </>
  );
}
