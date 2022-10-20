import styles from './QuestionGrid.module.css'
import Question from './Question'

export default function QuestionsGrid(props) {
    return (
        <div className={styles.grid}>
            {props.data.slice(0, props.numberOfQuestions).map(el => {
                return (
                    <Question
                        questionText = {el.question}
                        answerText = {el.answer}
                        id = {el.id}
                        key = {el.id}
                    />
                )
            })}
        </div>
    )
}
