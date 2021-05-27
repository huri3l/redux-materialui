import { Route, Switch } from "react-router-dom";
import { BoxStudy } from "./components/BoxStudy";
import { Home } from "./components/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/box-study" component={BoxStudy} />
    </Switch>
  );
};
