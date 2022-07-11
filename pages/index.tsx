import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const [swpeople, setSwpeople] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => setSwpeople(data.results));
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>sample pwa</h1>
        <h3>list of people in star wars</h3>

        <div className={styles.grid}>
          {swpeople.map((person) => (
            <Link href="/yasin" className={styles.card}>
              <a>

              <h3>{person.name} &rarr;</h3>
              <p>{person.birth_year}</p>
              </a>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
