import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Memory Game</title>
        <meta name="description" content="game to test your memory" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Link href="/game">Go to game</Link>
      </main>
    </>
  );
}
