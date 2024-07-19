import styles from "./styles.module.css"
import TicTacToeBoard from "./TicTacToeBoard/index"


export default function TicTacToe() {
    return (
        <div className={styles.ticTacToeContainer}>
            <div>
                <h1>Winner: O</h1>
                <TicTacToeBoard />
            </div>
            <div>
                <button className={styles.reset}>Reset</button>
                <div className={styles.movesContainer}>
                    <h2>Go to:</h2>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.buttonMove}>Move</button>
                        <button className={styles.buttonMove}>Move</button>
                        <button className={styles.buttonMove}>Move</button>
                        <button className={styles.buttonMove}>Move</button>
                        <button className={styles.buttonMove}>Move</button>
                        <button className={styles.buttonMove}>Move</button>
                        <button className={styles.buttonMove}>Move</button>
                    </div>
                </div>
            </div>

        </div>
    )
}