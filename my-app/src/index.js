import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Container, Button, Nav, Row, Col, Image, Navbar } from 'react-bootstrap';
import { Search, Cart, List, ArrowRightShort, ArrowLeftShort, Pause, Facebook } from 'react-bootstrap-icons';

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

  <Col className = "b">
    <h1>
      <Col className="text-center"><p>Looking for OEM?</p></Col>


      <h2 className="OEM">
        <Col className="text-center">
          <p>We're not only develop our own products,
            we also accept OEM orders. If you are running
            your own brand and looking for manufacturer,</p>
          <p>we're here to help! Please don't hesitate to contact us: info@fluory.com or Quick inquiry</p>
        </Col>
      </h2>

    </h1>
  </Col>
);

const Shop = () => (
  <Col className = "background">
<p>. </p>
  </Col>
)

const Shop2 = () => (

  <h1>

    <button className="shopItems">

      <button className='btn2'><Image src="https://www.fluory.com/cdn/shop/collections/MTSF19_900x.jpg?v=1555005991" width='350px'/></button>
      <button className='btn2'><Image src = "https://www.fluory.com/cdn/shop/collections/rashguard_900x.jpg?v=1555006364" width = '350px'/></button>
      <button className='btn2'><Image src = "https://www.fluory.com/cdn/shop/products/Koifish_900x.jpg?v=1561218336" width = '350px'/></button>

    </button>
  </h1>

)

const FooterMenu = () => (
  <footer className="py-3">
    <Container>
      <Row>
        <Col>
          Site Map
          <hr/>
          <p>About Fluory</p>
          <p>Muay Thai</p>
          <p>Jiu-Jitsu</p>
          <p>MMA</p>
          <p>Boxing</p>
          <p>Casual</p>
          <p>Fitness</p>
        </Col>
        <Col>
          Follow us
          <hr/>
          <p><Facebook/></p>

        </Col>
        <Col>
          Support
          <hr/>
          <p>Payment</p>
          <p>Shipping policy</p>
          <p>Return&Refund Policy</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact Us</p>
        </Col>
        <Col>
          CONTACT US
          <hr/>
          <p>WhatsApp: +86 13528501617</p>
          <p>Email: info@fluory.com</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

const Fluory = () => (
  <>
    <TopMenu/>
    <SecondMenu/>
    <Logo1/>
    <CenterText/>
    <Buttons/>
    <CenterText2/>
    <Shop/>
    <Shop2/>
    <FooterMenu/>

  </>
);

ReactDOM.render(<Fluory/>, document.getElementById('root'));