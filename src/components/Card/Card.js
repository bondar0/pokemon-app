import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

const Card = ({ name, image }) => {
  return (
    <div className="col-sm-6 col-xl-3">
      <div className="card mb-3">
        <div className={styles.imgWrapper}>
          <img className="card-img-top" src={image} alt="Card image Pokemon" />
        </div>

        <div className="card-body text-center">
          <h5 className="card-title font-weight-bold">{name}</h5>
          <Link to={`/pokemons/${name}`} className="btn btn-info">
            Show
          </Link>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
};

export default Card;
