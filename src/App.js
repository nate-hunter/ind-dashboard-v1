import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import './app.css'
import Home from "./pages/home/Home";
import SeasonList from "./pages/seasonList/SeasonList";
import Season from "./pages/season/Season";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/seasons"><SeasonList /></Route>
          <Route path="/season/:seasonId"><Season /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
