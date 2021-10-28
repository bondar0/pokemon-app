import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from 'views/Home';
import Pokemon from 'views/Pokemon';
import NotFound from 'views/404';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/pokemons" />
        </Route>
        <Route exact path="/pokemons" component={Home} />
        <Route path="/pokemons/:name" component={Pokemon} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
