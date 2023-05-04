import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Alumni from "./components/Alumni";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app-section">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/alumni" component={Alumni} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
