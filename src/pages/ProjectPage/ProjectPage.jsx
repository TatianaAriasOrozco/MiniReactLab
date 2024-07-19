import TicTacToe from '../../projects/TicTacToe/TicTacToe';
import PokeCollection from '../../projects/PokeCollection/PokeCollection';
import ReactWordle from '../../projects/ReactWordle/ReactWordle';
import styles from './ProjectPage.module.css';
import PropTypes from 'prop-types';
import VideoFeed from '../../projects/VideoFeed/VideoFeed';

const ProjectPage = ({ currentProject }) => {
  return (
    <div className={styles.content}>
      {currentProject === 'Tic Tac Toe' && <TicTacToe />}
      {currentProject === 'Pokemon Collection' && <PokeCollection />}
      {currentProject === 'Wordle' && <ReactWordle />}
      {currentProject === 'Video Player' && <VideoFeed />}
    </div>
  );
};

export default ProjectPage;

ProjectPage.propTypes = {
  currentProject: PropTypes.string.isRequired,
};
