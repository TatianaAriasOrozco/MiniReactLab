import PropTypes from 'prop-types';
import Button from '../../components/common/Button/Button';
import styles from './HomePage.module.css';

const HomePage = ({ onClickProject }) => {
  return (
    <div className={styles.content}>
      <h1>Yo soy la lista de Proyectos</h1>

      <Button onClick={() => onClickProject('Tic Tac Toe')}>Tic Tac Toe</Button>
      <Button
        onClick={() => onClickProject('Pokemon Collection')}
        variant="outline"
      >
        Pokemon Collection
      </Button>
      <Button onClick={() => onClickProject('Wordle')} variant="destructive">
        Wordle
      </Button>
      <Button onClick={() => onClickProject('Video Player')} variant="success">
        Video Player
      </Button>
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  onClickProject: PropTypes.func.isRequired,
};
