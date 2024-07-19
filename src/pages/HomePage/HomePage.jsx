import PropTypes from 'prop-types';
import styles from './HomePage.module.css';
import Card from '../../components/common/Card/Card';
import pokeapiLogo from '../../assets/pokeapi.png';
import tictactoeLogo from '../../assets/tictactoe.png';
import wordleLogo from '../../assets/wordle.png';
import youtubeLogo from '../../assets/youtube.png';

const HomePage = ({ onClickProject }) => {
  return (
    <div className={styles.content}>
      <Card
        image={tictactoeLogo}
        title="ReactDev Tic-Tac-Toe"
        buttons={[
          'useState',
          'useEffect',
          'Custom Hooks',
          'localStorage',
          'CSS Modules',
          'otherFeature',
        ]}
        onClick={() => onClickProject('Tic Tac Toe')}
      />
      <Card
        image={pokeapiLogo}
        title="Poke Collection"
        buttons={[
          'useState',
          'useEffect',
          'Custom Hooks',
          'localStorage',
          'CSS Modules',
          'otherFeature',
        ]}
        onClick={() => onClickProject('Pokemon Collection')}
      />
      <Card
        image={wordleLogo}
        title="React Wordle"
        buttons={[
          'useState',
          'useEffect',
          'Custom Hooks',
          'localStorage',
          'CSS Modules',
          'otherFeature',
        ]}
        onClick={() => onClickProject('Wordle')}
      />
      <Card
        image={youtubeLogo}
        title="Video Feed"
        buttons={[
          'useState',
          'useEffect',
          'Custom Hooks',
          'localStorage',
          'CSS Modules',
          'otherFeature',
        ]}
        onClick={() => onClickProject('Video Player')}
      />

      {/* <Button onClick={() => {}}>Tic Tac Toe</Button>
      <Button onClick={() => {}} variant="outline">
        Pokemon Collection
      </Button>
      <Button onClick={() => {}} variant="destructive">
        Wordle
      </Button>
      <Button onClick={() => {}} variant="success">
        Video Player
      </Button> */}
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  onClickProject: PropTypes.func.isRequired,
};
