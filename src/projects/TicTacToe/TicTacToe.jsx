import Button from '../../components/common/Button/Button.jsx';
import { I18nContext } from '../../contexts/I18nContext.jsx';
import { useContext } from 'react';
import styles from './styles.module.css';
import TicTacToeBoard from './TicTacToeBoard/TicTacToeBoard.jsx';
import useLocalStorage from '../../hooks/useLocalStorage.js';

export default function TicTacToe() {
  const [winner, setWinner] = useLocalStorage('ticTacToeWinner', '');
  const [history, setHistory] = useLocalStorage('ticTacToeHistory', [Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useLocalStorage('ticTacToeCurrentMove', 0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  // t es para traducir
  const { t } = useContext(I18nContext);

  const handleWinner = (status) => {
    setWinner(status);
  };

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function reset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setWinner('');
    localStorage.removeItem('ticTacToeHistory');
    localStorage.removeItem('ticTacToeCurrentMove');
    localStorage.removeItem('ticTacToeWinner');
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = t('move') + " " + move;
    } else {
      description = t('move-0');
    }
    return (
      <li key={move}>
        <Button onClick={() => jumpTo(move)}>{description}</Button>
      </li>
    );
  });

  return (
    <div className={styles.ticTacToeContainer}>
      <div className={styles.boardContent}>
        <h1>{winner}</h1>
        <TicTacToeBoard handleWinner={handleWinner} xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <Button variant="destructive" onClick={() => reset()}>{t('reset-button')}</Button>
        <div className={styles.movesContainer}>
          <h2>{t('Go-to')}</h2>
          <ol className={styles.buttonsContainer}>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
