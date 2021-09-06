import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./pages/Create";
import Booking from "./pages/booking/Booking";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Dashboard>
        <Switch>
          <Route exact path="/">
            <Create />
          </Route>
          <Route path="/booking" exact>
            <Booking />
          </Route>
        </Switch>
      </Dashboard>
    </Router>
  );
}

export default App;
