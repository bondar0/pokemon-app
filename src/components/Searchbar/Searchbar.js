import { useEffect, useRef, useContext, useState } from 'react';
import { TermContext } from 'views/Home';

const Searchbar = (props) => {
  const inputRef = useRef(null);
  const [term, setTerm] = useState('');
  const setWord = useContext(TermContext);

  const handlerFocusInput = () => {
    inputRef.current.focus();
  };

  const handlerChangeInput = (e) => {
    setTerm(e.target.value);
    setWord(e.target.value);
  };

  useEffect(() => {
    handlerFocusInput();
  }, []);

  return (
    <input
      ref={inputRef}
      value={term}
      onChange={handlerChangeInput}
      className="form-control mb-5"
      type="text"
      placeholder="Search pokemon..."
    />
  );
};

export default Searchbar;
