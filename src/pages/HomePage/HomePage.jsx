import PropTypes from 'prop-types';
import Button from '../../components/common/Button/Button';
const HomePage = ({ onClickAnyProject }) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <h1>Yo soy la lista de Proyectos</h1>

      <Button onClick={onClickAnyProject}>Tic Tac Toe</Button>
      <Button onClick={onClickAnyProject} variant="outline">
        Pokemon Collection
      </Button>
      <Button onClick={onClickAnyProject} variant="destructive">
        Wordle
      </Button>
      <Button onClick={onClickAnyProject} variant="success">
        Video Player
      </Button>
    </div>
  );
};

export default HomePage;

HomePage.propTypes = {
  onClickAnyProject: PropTypes.func.isRequired,
};
