import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SignIn } from "./Pages/SignIn";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
