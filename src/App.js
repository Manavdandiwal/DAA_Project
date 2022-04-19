import { render } from "react-dom";
import Select from "./Select";
import InputKnapsack from "./Input";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import { Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/LCS">
            <h1 className="heading">LCS Calculator</h1>
            <Select />
          </Route>
          <Route path="/knapsack">
            <h1 className="heading">0 1 Knapsack</h1>
            <InputKnapsack />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
