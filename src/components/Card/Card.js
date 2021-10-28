import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PokemonImg from 'assets/img/pokemon.png';

const Card = ({ pokemon: { name, url } }) => {
  return (
    <div className="col-sm-6 col-xl-3">
      <div className="card mb-3">
        <img
          className="card-img-top"
          src={PokemonImg}
          alt="Card image Pokemon"
        />
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
    url: PropTypes.string.isRequired,
  }),
};

export default Card;
