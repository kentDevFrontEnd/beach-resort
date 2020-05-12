import React from "react";
import "./App.scss";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Default from "./pages/Default";
import SingleRoom from "./pages/SingleRoom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import { RoomProvider } from "./context";
function App() {
  return (
    <RoomProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/rooms" component={Rooms} />
          <Route path="/rooms/:slug" component={SingleRoom} />
          <Route component={Default} />
        </Switch>
      </Router>
    </RoomProvider>
  );
}

export default App;
