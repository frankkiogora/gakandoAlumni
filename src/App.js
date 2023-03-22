import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import Home from './components/Home';
import Blog from './components/Blog';
import Alumni from './components/Alumni';
import Contact from './components/Contact';

import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_x8IzQA7Nq',
  ClientId: 'gakandoalumniconnect'
};

const userPool = new CognitoUserPool(poolData);

function App() {
  return (
   
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand as={Link} to="/">Gakando Alumni</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/alumni">Alumni</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/alumni" component={Alumni} />
        </Switch>

        <footer className="footer">
          <Container>
            <Row>
              <Col>
                <p className="text-muted">&copy; 2023 Gakando Alumni. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;



// *****************************************************************************
// import React from 'react';
// import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import Blog from './components/Blog';
// import Contact from './components/Contact';
// import Alumni from './components/Alumni';

// function App() {
//   return (
//     <div className="App">
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="#home">Gakando Alumni</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="ml-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#about">About</Nav.Link>
//             <Nav.Link href="#blog">Blog</Nav.Link>
//             <Nav.Link href="#contact">Contact</Nav.Link>
//             <Nav.Link href="#alumni">Alumni</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>

//       <Home />

//       <About />

//       <Blog />

//       <Contact />

//       <Alumni />

//       <footer className="footer">
//         <Container>
//           <Row>
//             <Col>
//               <p className="text-muted">&copy; 2023 Gakando Alumni. All rights reserved.</p>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     </div>
//   );
// }

// export default App;
