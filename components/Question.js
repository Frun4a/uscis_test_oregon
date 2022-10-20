import { useState } from "react";
import styles from './Question.module.css'

export default function Question(props) {

    const [showAnswer, setShowAnswer] = useState(false)

    return (
      <div className={styles.card}>
        <h2>
            {props.questionText} (#{props.id})
        </h2>
        <div className="answer_text" style={{display: showAnswer ? 'block' : 'none'}}>
            {props.answerText.split("\n").map((el, index) => {
                return (
                    <li key = {index}>
                        {el}
                    </li>
                )
            })}
        </div>
        <div>
            <button onClick={() => setShowAnswer(!showAnswer)} className={styles.answerButton}>
                {showAnswer ? "Hide Answer" : "Show Answer"}
            </button>
        </div>
      </div>
    )
  }