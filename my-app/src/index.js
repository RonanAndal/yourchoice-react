import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Nav, Row, Col, Image, Navbar } from 'react-bootstrap';
import { Search, Cart, List, ArrowRightShort, ArrowLeftShort, Pause } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar bg = 'black' expand = 'lg'>
    <Container>
      <Nav.Link><Image src = 'https://www.fluory.com/cdn/shop/files/fluory-logo_350x@2x.png?v=1613759600' width= '100px'/></Nav.Link>

      <Nav className="justify-content-end">
          <Nav.Link><Search color = 'white'/></Nav.Link>
          <Nav.Link><Cart color = 'white'/></Nav.Link>

      </Nav>
    </Container>
  </Navbar>
);

const SecondMenu = () => (
  <Navbar bg = 'black' expand = 'lg'>
    <Container>
      <Nav class = 'secondmenu'><List/>Menu</Nav>

      <Nav className = "justify-content-end">
        <Nav class = 'secondmenu'>Account</Nav>
      </Nav>
    </Container>
  </Navbar>
);

const Logo1 = () => (
  <Row className="justify-content-md-center">
    <Col>
      <Image src="https://www.fluory.com/cdn/shop/files/20181216023959_ed_2048x.jpg?v=1613765793" alt="Fluory logo muay thai" fluid/>
    </Col>
  </Row>
)

const CenterText = () => (
  <Col className="center">
    <span style={{ backgroundColor: '#ffd748', padding: '5px'}}>Muay Thai</span>
  </Col>
);

const Buttons = () => (
  <h1>

    <button className ="centerbuttons">
      <button className='btn'>1/4</button>
      <button className='btn'><Pause/></button>
      <button className='btn'><ArrowLeftShort/></button>
      <button className='btn'><ArrowRightShort/></button>
    </button>
  </h1>
);

const CenterText2 = () => (

    <text className = "whitebackground">
      
    </text>

);

const IslandSnow = () => (
  <>
    <TopMenu/>
    <SecondMenu/>
    <Logo1/>
    <CenterText/>
    <Buttons/>
    <CenterText2/>
  </>
);

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));