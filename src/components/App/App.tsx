import { FC } from "react";
import Converter from "../Converter/Converter";
import { Route, Switch, Link } from "react-router-dom";
import CurrentCurrencies from "../CurrentCurrencies/CurrentCurrencies";
import "./App.css";

const App: FC = () => {
  return (
    <div className="App">
      <div className="links">
        <Link className="link" to="/">
          Convert
        </Link>
        <Link className="link" to="/currencies">
          Current currencies
        </Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Converter />
        </Route>
      </Switch>
      <Route exact path="/currencies">
        <CurrentCurrencies />
      </Route>
    </div>
  );
};

export default App;
