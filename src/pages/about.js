import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/About.module.css';
import Button from '@/components/Button';
import AboutImgsDecorations from '@/components/AboutImgsDecorations';

const imgsDecoration = [
  '5', '27', '85', '105', '123',
];

export default function About() {
  return (
    <>
      <Head>
        <title>PokeNex - About</title>
      </Head>

      <div className={styles.about}>
        <h1>PokeNext</h1>
        <p>This app was made with NextJS</p>
        <Image
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"
          alt="Pokemon"
          width="215"
          height="215"
          priority
        />
        <Button href="/">Go back to the home page</Button>

        <ul className={styles.imgs_decoration}>
          {imgsDecoration.map((item) => (
            <AboutImgsDecorations key={item} imgIndex={item} />
          ))}
        </ul>
      </div>
    </>
  );
}
