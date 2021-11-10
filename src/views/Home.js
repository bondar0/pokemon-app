import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import Title from 'components/Title/Title';
import Pokemon from 'components/Card/Card';
import Searchbar from 'components/Searchbar/Searchbar';

export const TermContext = createContext();

const Home = () => {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState([]);
  const [term, setTerm] = useState('');
  const [nextPage, setNextPage] = useState(
    'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'
  );

  const listPokemons = async () => {
    try {
      const response = await axios.get(nextPage);

      setNextPage(response.data.next);

      const pokemonObj = (data) => {
        data.map(async (val) => {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${val.name}`
          );

          setPokemon((pokeList) => [...pokeList, response.data]);
        });
      };

      pokemonObj(response.data.results);
    } catch (e) {
      setError(`Sorry, we couldn't load Pokemons`);
    }
  };

  useEffect(() => {
    listPokemons();
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
              .map((item) => (
                <Pokemon
                  key={item.id}
                  name={item.name}
                  image={item.sprites.other.dream_world.front_default}
                />
              ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info">
                {error ? error : 'Loading ...'}
              </div>
            </div>
          )}
        </div>
        <button
          onClick={listPokemons}
          className="btn btn-primary ml-auto mr-auto d-block mb-5"
        >
          Load More
        </button>
      </div>
    </TermContext.Provider>
  );
};

export default Home;
