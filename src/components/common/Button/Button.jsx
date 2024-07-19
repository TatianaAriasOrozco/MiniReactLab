import styles from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ variant = 'primary', children, ...props }) => {
  return (
    <button {...props} className={styles[variant]}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};
