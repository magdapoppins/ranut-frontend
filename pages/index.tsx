import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// Todo make ranus rain when clicking a marker?
const RanuRain: React.FC<{ imageName: string }> = ({ imageName }) => (
  <div
    className={styles.rain}
    style={{
      left: `${Math.random() * 90}%`,
      animationDuration: `${Math.random() * 40}s`,
    }}
  >
    <Image src={imageName} alt="French fry" layout="fill" objectFit="contain" />
  </div>
);

const ranus = [
  "/ranu-basic.png",
  "/ranu-bataatti.png",
  "/ranu-haitari.png",
  "/ranu-lytty.png",
  "/ranu-pitka.png",
];

const Home: NextPage = () => {
  const DynamicComponentWithNoSSR = dynamic(() => import("../components/Map"), {
    ssr: false,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Ranut</title>
        <meta name="description" content="Find the best ranus around!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicComponentWithNoSSR />
      </main>

      <footer className={styles.footer}>
        <span>
          Built by <a href="https://github.com/lgrigoryeva1">mila</a> &{" "}
          <a href="https://github.com/magdapoppins">magda</a> & viia
        </span>
      </footer>
    </div>
  );
};

export default Home;
