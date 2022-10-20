import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import QuestionsGrid from '../components/QuestionsGrid'
import Question from '../components/Question'
import dataFile from '../data/data'
import { useState } from 'react'

export default function Home() {

  const [data, updateData] = useState(dataFile)
  const [numberOfQuestions, setNumberOfQuestions] = useState(10)
  const [updateKey, setUpdateKey] = useState(0)

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  function handleShuffle() {
    updateData(shuffle(data))
    setUpdateKey(updateKey + 1)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>USCIS Test for Oregon</title>
        <meta name="description" content="USCIS Test for Oregon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          USCIS Test for Oregon Questions
        </h1>

        <div className={styles.description}>
          <label for="number">Number of questions: </label>
          <input
            type="number"
            name="number"
            className={styles.numberOfQuestions}
            value={numberOfQuestions}
            onChange={event => setNumberOfQuestions(event.target.value)}>
          </input>
          <div>
            <button className={styles.shuffle_button} role="button" onClick={handleShuffle}>Shuffle</button>
          </div>
        </div>
        <QuestionsGrid
          data = {data}
          numberOfQuestions = {numberOfQuestions}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
