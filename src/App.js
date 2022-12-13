
import './App.css';
import Header from './Header';
import Main from './Main'
import About from './About';
import Users from './Users';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/" component={Main} />
          <Route path="about" component={About} />
          <Route path="users" component={Users} />
          
        </Switch>
      </Router>


      <About/>
      <Users/>
    </>
  );
}

export default App;
