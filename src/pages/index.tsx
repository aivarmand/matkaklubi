import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/klubi-logo.png";
import styles from "../styles/Home.module.css";

const Pais = () => {
  return (
    <div className={styles.pais}>
      <nav className={styles.paisNav}>
          <a href="index.html" className={styles.logo}>
              {/* <img src="assets/klubi-logo.png" alt="Matkaklubi logo" className={styles.logoPilt}> */}
              <Image 
              alt="Logo"
              src={logo}
              placeholder="blur"
              quality={100}
              sizes="100vw"
              className={styles.logoPilt}
              />
              <div className={styles.logoTekst}>
                  <span>HIKING</span>
                  <span>CLUB</span>
              </div>
          </a>
          <div className={styles.paremPool}>
              <a href="index.html" className={styles.paremPoolLink}>HOME</a>
              <a href="index.html" className={styles.paremPoolLink}>UPCOMING TREKS</a>
              <a href="index.html" className={styles.paremPoolLink}>TREK FOR FAMILY</a>
              <a href="index.html" className={styles.paremPoolLink}>CONTACT US</a>
          </div>
      </nav>
      <div className={styles.paisAlumine}>
          <div className={styles.paisAlumineSisu}>
              <h2 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH2}`}>CLIMB FOR BETTER</h2>
              <h1 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH1}`}>GET OUT NOW</h1>
              <h4 className={`${styles.pealkirjad} ${styles.paisAlumineSisuH4}`}>JOIN US FOR THE WEEEKEND TO CLIMB<br /> THE HIGHEST PEAK IN ENGLAND</h4>
              <button className={styles.paisAlumineSisuNupp}>VIEW UPCOMING TREKS</button>
          </div>
          <div className={styles.paisAluminePilt}></div>
      </div>
  </div>
  )
}

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Matkaklubi 2023</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Pais />
    </div>
  );
};

export default Home;
