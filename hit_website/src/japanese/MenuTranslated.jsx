import { Link } from "react-router-dom";
import { Nav, Container } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Menu = () => {
  return (
      <>
        <Navbar style={{background: '#E0E0E0' }}>
             <Card style={{top: 0, position: 'absolute', width: "100%", padding: 30, backgroundColor: '#9EB4DB'}}>
                  <Card.Body>
                  </Card.Body>
              </Card>
            <Nav style={{padding: 170}} className="me-auto">
             
                  <Row style={{top: 0, position: 'absolute', alignContent: 'center'}}>
                      <Col className="square border border-dark" style={{backgroundColor: '#D9D9D9', padding: 10, width: 250}} xs={6} md={3}>
                        <a style={{color: 'black'}} href="javascript:void(0)"><p style={{ textAlign: 'center', marginBottom: 0}}>Contact</p></a> 
                      </Col>
                      <Col className="square border border-dark" style={{backgroundColor: '#D9D9D9', padding: 10, width: 250}} xs={6} md={3}>
                        <a style={{color: 'black'}} href="javascript:void(0)"><p style={{ textAlign: 'center', marginBottom: 0}}>Site Details</p></a> 
                      </Col>
                      <Col className="square border border-dark" style={{backgroundColor: '#D9D9D9', padding: 10, width: 250}} xs={6} md={3}>
                      <a style={{color: 'black'}} href="javascript:void(0)"><p style={{ textAlign: 'center', marginBottom: 0}}>External Site</p></a> 
                      </Col>
                      <Col className="square border border-dark" style={{backgroundColor: '#D9D9D9', padding: 10, width: 250}} xs={6} md={3}>
                      <a style={{color: 'black'}} href="javascript:void(0)"><p style={{ textAlign: 'center', marginBottom: 0}}>Domestic Guidance</p></a> 
                      </Col>
                  </Row>

                  <Row style={{top: 45, position: 'absolute', alignContent: 'center'}}>
                      <Col className="square border border-dark" style={{backgroundColor: '#D9D9D9', padding: 10, width: 250}} xs={6} md={3}>
                        <a style={{color: 'black'}} href="javascript:void(0)"><p style={{ textAlign: 'center', marginBottom: 0}}>WaseCon Inc.</p></a> 
                      </Col>
                      <Col className="square border border-dark" style={{backgroundColor: '#D9D9D9', padding: 10, width: 250}} xs={6} md={3}>
                        <a style={{color: 'black'}} href="javascript:void(0)"><p style={{ textAlign: 'center', marginBottom: 0}}>Advertisement Product</p></a> 
                      </Col>
                      <Col className="square border border-dark" style={{backgroundColor: '#D9D9D9', padding: 10, width: 250}} xs={6} md={3}>
                      <a style={{color: 'black'}} href="javascript:void(0)"><p style={{ textAlign: 'center', marginBottom: 0}}>Company</p></a> 
                      </Col>
                      <Col className="square border border-dark" style={{backgroundColor: '#D9D9D9', padding: 10, width: 250}} xs={6} md={3}>
                      <a style={{color: 'black'}} href="javascript:void(0)"><p style={{ textAlign: 'center', marginBottom: 0}}>Construction Co., Ltd.</p></a> 
                      </Col>
                                          
                  </Row>
             
                    
                    <h1 style={{fontSize: 82, color: '#d31414', fontWeight: 800, textDecorationStyle: 'dashed' ,textAlign:'center', position: 'absolute', top: 120, left: 510}}>WaseCon</h1>

                  <Card style={{position: 'absolute', top: 240, right: 200, width: 900, padding: 10, backgroundColor: '#BECCEA'}}>
                    <Card.Body>
                    <Form inline>
                          <Row style={{justifyContent: 'center'}}>
                            <Col style={{width: 650}} xs="auto">
                              <Form.Control
                                type="text"
                                placeholder="Search for the survey section! Fighting!"
                                className=" mr-sm-2"
                              />
                            </Col>
                            <Col xs="auto">
                              <Button>Search</Button>
                            </Col>
                          </Row>
                      </Form> 
                    </Card.Body>
                  </Card>
                  

              
              {/*<Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
            </Nav> 
        </Navbar>
       
      </>
    );
  }

export default Menu;