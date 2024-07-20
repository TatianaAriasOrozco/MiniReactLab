import Square from "./Square/square.jsx"
import styles from "./styles.module.css"
import { useState, useEffect } from "react";
import { I18nContext } from '../../../contexts/I18nContext.jsx'
import { useContext } from 'react';


export default function TicTacToeBoard({ handleWinner, xIsNext, squares, onPlay }) {
    const [winningLine, setWinningLine] = useState(null);
    const { t } = useContext(I18nContext);

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: [a, b, c] };
            }
        }
        return null;
    }

    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    }

    useEffect(() => {
        const winner = calculateWinner(squares);
        const result = calculateWinner(squares);
        let status;
        if (winner) {
            status = t('won-game') + " " + winner.winner;
            handleWinner(status);
            setWinningLine(result.line);
        } else if (!squares.includes(null)) {
            status = t('tied-game');
            handleWinner(status);
            setWinningLine(null);
        } else {
            status = t('next-player') + ": " + (xIsNext ? 'X' : 'O');
            handleWinner(status);
            setWinningLine(null);
        }
    }, [squares, xIsNext, handleWinner]);

    return (
        <div className={styles.board}>
            <div className={styles.boardRow}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} isWinner={winningLine?.includes(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} isWinner={winningLine?.includes(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} isWinner={winningLine?.includes(2)} />
            </div>
            <div className={styles.boardRow}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} isWinner={winningLine?.includes(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} isWinner={winningLine?.includes(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} isWinner={winningLine?.includes(5)} />
            </div>
            <div className={styles.boardRow}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} isWinner={winningLine?.includes(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} isWinner={winningLine?.includes(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} isWinner={winningLine?.includes(8)} />
            </div>
        </div>
    )
}