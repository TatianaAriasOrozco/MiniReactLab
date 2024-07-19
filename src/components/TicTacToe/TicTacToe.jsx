import styles from "./styles.module.css"
import TicTacToeBoard from "./TicTacToeBoard/TicTacToeBoard.jsx"
import { useState } from "react";


export default function TicTacToe() {

    const [winner, setWinner] = useState('');

    const handleWinner = (status) => {
        setWinner(status);
    };

    return (
        <div className={styles.ticTacToeContainer}>
            <div>
                <h1>{winner}</h1>
                <TicTacToeBoard handleWinner={handleWinner} />
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