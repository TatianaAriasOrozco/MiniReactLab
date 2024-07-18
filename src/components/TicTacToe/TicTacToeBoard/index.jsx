import Square from "./Square"
import styles from "./styles.module.css"


export default function TicTacToeBoard() {
    return (
        <div className={styles.board}>
            <div className={styles.boardRow}>
                <Square />
                <Square />
                <Square />
            </div>
            <div className={styles.boardRow}>
                <Square />
                <Square />
                <Square />
            </div>
            <div className={styles.boardRow}>
                <Square />
                <Square />
                <Square />
            </div>
        </div>
    )
}