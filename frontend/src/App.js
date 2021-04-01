import '../src/CSS/App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Homepage/Home';
import NavbarPage from './Components/NavBar/Navbar';

const App = () =>  {
  
  return (
    <div className="App">
      <Router>
        <NavbarPage/>
        <Switch>
          <Route path="/" exact>
          <Home/>
          </Route>

        </Switch>
      </Router>



      
      
    </div>
  );
}

export default App;
