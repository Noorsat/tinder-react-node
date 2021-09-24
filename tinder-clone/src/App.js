import './App.css';
import Header from './components/Header/Header';
import { SwipeButtons } from './components/SwipeButtons/SwipeButtons';
import { TinderCards } from './components/TinderCards/TinderCards';
import {
  Switch,
  Route} from "react-router-dom";
import { LikedCards } from './components/LikedCards.js/LikedCards';

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/">
          <TinderCards/>
          <SwipeButtons/>
        </Route>
        <Route exact path="/likes">
          <LikedCards/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
