import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import Title from 'components/Title/Title';
import Pokemon from 'components/Card/Card';
import Searchbar from 'components/Searchbar/Searchbar';
import { v4 as uuidv4 } from 'uuid';

export const TermContext = createContext();

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon', {
          params: {
            offset: 0,
            limit: 100,
          },
        });
        setPokemon(response.data.results);
      } catch (e) {
        setError(`Sorry, we couldn't load Pokemons`);
      }
    })();
  }, []);

  return (
    <TermContext.Provider value={setTerm}>
      <div className="container">
        <Title title="Pokedex App" />
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <Searchbar />
          </div>
        </div>

        <div className="row">
          {pokemon.length ? (
            pokemon
              .filter((data) => data.name.includes(term.toLowerCase()))
              .map((item) => <Pokemon key={uuidv4()} pokemon={item} />)
          ) : (
            <div className="col-12">
              <div className="alert alert-info">
                {error ? error : 'Loading ...'}
              </div>
            </div>
          )}
        </div>
      </div>
    </TermContext.Provider>
  );
};

export default Home;
