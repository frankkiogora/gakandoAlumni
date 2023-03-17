import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog';
import Members from './components/Members';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/members" component={Members} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
