import '../src/CSS/App.css';

import Forum from './Components/ForumPage/Forum';
import Home from './Components/Homepage/Home';
import Page from './Components/SideBar/StandardPage';
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
    
      {/* <Home/> */}
      {/* <Page/> */}
      {/*<Forum/> */}



    </div>
  );
}

export default App;
