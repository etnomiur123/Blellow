import Nav from './Components/Nav'
import Home from './Components/Home'
import Repository from './Components/Repository'
import About from './Components/About'
import Movie from './Components/Movie'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Styles/index.scss';


const App = () => {

  const removeHyphen = (y) => {
    if(y) {
      const arr = y.split("");
      if (arr[arr.length - 1] === "–") {
        arr.pop()
      }
      return arr.join("")
    }
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/repository" exact render={(props) => <Repository {...props} removeHyphen={removeHyphen} />} />
          <Route path="/repository/:title" render={(props) => <Movie {...props} removeHyphen={removeHyphen} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
