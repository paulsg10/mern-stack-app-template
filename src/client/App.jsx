import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../styles/App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import PageThree from './components/PageThree';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">MERN</Link>
          <Link to="/pageOne" className="navbar-brand">Page One</Link>
          <Link to="/pageTwo" className="navbar-brand">Page Two</Link>
          <Link to="/pageThree" className="navbar-brand">Page Three</Link>
        </nav>
        <Route exact path="/" />
        <Route path="/pageOne" component={PageOne} />
        <Route path="/pageTwo" component={PageTwo} />
        <Route path="/pageThree" component={PageThree} />
      </div>
    </Router>
  );
};

export default App;
