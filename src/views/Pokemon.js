import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Title from 'components/Title/Title';
import Image from 'components/Image/Image';
import Details from 'components/Details/Details';

const Pokemon = () => {
  const { name } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name}`,
          {}
        );
        setPokemonDetails(response.data);
      } catch (e) {
        setError(`Sorry, we couldn't load Pokemon`);
      }
    })();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="container pt-5 pb-5">
      {pokemonDetails ? (
        <>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <Image
                src={pokemonDetails.sprites.other.home.front_default}
                name={pokemonDetails.name}
              />
            </div>
            <div className="col-lg-6">
              <Title title={pokemonDetails.name} />
              <Details pokemonDetails={pokemonDetails} />
            </div>
          </div>
          <Link to="/pokemons" className="btn btn-warning mt-3">
            Back
          </Link>
        </>
      ) : (
        <div className="alert alert-info">{error ? error : 'Loading ...'}</div>
      )}
    </div>
  );
};

export default Pokemon;
