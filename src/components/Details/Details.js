import styles from './Details.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Details = ({ pokemonDetails }) => {
  return (
    <div className={styles.content}>
      <ul className={styles.list}>
        <li>
          <span className="font-weight-bold">Order: </span>
          {pokemonDetails.order}
        </li>
        <li>
          <span className="font-weight-bold">First 5 moves: </span>
          <ul className={styles.nestedList}>
            {pokemonDetails.moves.map(({ move }, index) => {
              return index < 5 ? (
                <li key={uuidv4()} className={styles.nestedListItem}>
                  {move.name}
                </li>
              ) : null;
            })}
          </ul>
        </li>
        <li>
          <span className="font-weight-bold">Types: </span>
          <ul className={styles.nestedList}>
            {pokemonDetails.types.map(({ type }) => (
              <li key={uuidv4()} className={styles.nestedListItem}>
                {type.name}
              </li>
            ))}
          </ul>
        </li>
        <li>
          <span className="font-weight-bold">Weight: </span>
          {pokemonDetails.height}
        </li>
        <li>
          <span className="font-weight-bold">Weight: </span>
          {pokemonDetails.weight}
        </li>
      </ul>
    </div>
  );
};

Details.propTypes = {
  pokemonDetails: PropTypes.object.isRequired,
};

export default Details;
