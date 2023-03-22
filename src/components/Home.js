import React from 'react';
import { Container, Row, Col, Navbar, Nav, Card, Button } from 'react-bootstrap';


function Home() {
  return (
    <div>
    <Container>
        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Welcome to Gakando Alumni</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis felis a nisi consectetur pretium. Nulla facilisi.
                </Card.Text>
                <Button variant="primary" href="/about">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>About Us</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis felis a nisi consectetur pretium. Nulla facilisi.
                </Card.Text>
                <Button variant="primary" href="/about">Learn More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Blog</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis felis a nisi consectetur pretium. Nulla facilisi.
                </Card.Text>
                <Button variant="primary" href="/events">View Alumni</Button>
              </Card.Body>
            </Card>
          </Col>

                    <Col>
            <Card>
              <Card.Body>
                <Card.Title>Upcoming Events</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis felis a nisi consectetur pretium. Nulla facilisi.
                </Card.Text>
                <Button variant="primary" href="/events">View Alumni</Button>
              </Card.Body>
            </Card>
          </Col>
          







          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Contact Us</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis felis a nisi consectetur pretium. Nulla facilisi.
                </Card.Text>
                <Button variant="primary" href="/contact">Contact Us</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
