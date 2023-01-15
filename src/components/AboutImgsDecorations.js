import Image from 'next/image';

export default function AboutImgsDecorations({ imgIndex }) {
  return (
    <li>
      <Image
        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(`00${imgIndex}`).slice(imgIndex < 1000 ? -3 : 2)}.png`}
        alt="Pokemon"
        width="80"
        height="80"
      />
    </li>
  );
}
