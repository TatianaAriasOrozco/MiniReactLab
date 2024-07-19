import Button from '../../components/common/Button/Button.jsx';
import { I18nContext } from '../../contexts/I18nContext.jsx';
import styles from './styles.module.css';
import TicTacToeBoard from './TicTacToeBoard/TicTacToeBoard.jsx';
import { useState, useContext } from 'react';

export default function TicTacToe() {
  const [winner, setWinner] = useState('');

  const handleWinner = (status) => {
    setWinner(status);
  };

  // t es para traducir
  //const { t } = useContext(I18nContext);

  return (
    <div className={styles.ticTacToeContainer}>
      <div className={styles.boardContent}>
        <h1>{winner}</h1>
        <TicTacToeBoard handleWinner={handleWinner} />
      </div>
      <div>
        <Button variant="destructive">reset</Button>
        <div className={styles.movesContainer}>
          <h2>Go to:</h2>
          <div className={styles.buttonsContainer}>
            <Button>Move</Button>
            <Button>Move</Button>
            <Button variant="success">Move</Button>
            <Button>Move</Button>
            <Button>Move</Button>
            <Button>Move</Button>
            <Button>Move</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
