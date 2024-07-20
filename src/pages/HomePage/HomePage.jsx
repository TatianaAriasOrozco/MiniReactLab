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
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  onClickProject: PropTypes.func.isRequired,
};
