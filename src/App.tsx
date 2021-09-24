import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppBackground } from './components/sections/styled';

import Header from './components/header/Header';
import Login from './components/header/Login';
import Home from './components/sections/Home';
import Detail from './components/detail/Detail';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/detail/:id">
            <AppBackground />
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
