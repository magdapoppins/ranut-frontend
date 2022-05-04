import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ranut</title>
        <meta name="description" content="Find the best ranus around" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ranut.fi is coming soon!
        </h1>

        <p className={styles.description}>
          Get ready to rate the best ranus.
        </p>
      </main>

      <footer className={styles.footer}>
        Build by <a href="https://github.com/lgrigoryeva1">mila</a> & <a href="https://github.com/magdapoppins">magda</a>
      </footer>
    </div>
  )
}

export default Home
