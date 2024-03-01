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
    <span style={{ backgroundColor: '#fcb814', padding: '5px'}}>Muay Thai</span>
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
          <p>we're here to help! Please don't hesitate to contact us: <row className = "yellow2">info@fluory.com </row>or <row className = "yellow2">Quick inquiry</row></p>
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

      <button className='btn2'>
        <Col className = "buttonName"><p>Muay Thai</p>
          <Col className = "yellow"><p>VIEW ALL</p></Col></Col>
        <Col className='imagebackground'><Image src="https://www.fluory.com/cdn/shop/collections/MTSF19_900x.jpg?v=1555005991" width='350px'/></Col>

      </button>
      <button className='btn2'>
        <Col className = "buttonName2"><p>MMA</p>
          <Col className = "yellow"><p>VIEW ALL</p></Col></Col>
      <Col className = "imagebackground"><Image src="https://www.fluory.com/cdn/shop/collections/rashguard_900x.jpg?v=1555006364" width='350px'/></Col>
      </button>
    
      
      <button className='btn2'>
        <Col className = "buttonName3"><p>Jiu-Jitsu</p>
          <Col className = "yellow"><p>VIEW ALL</p></Col></Col>
        <Col className = "imagebackground"><Image src="https://www.fluory.com/cdn/shop/products/Koifish_900x.jpg?v=1561218336" width='350px'/>
        </Col>
      </button>

    </button>

    <h2>



    </h2>
  </h1>



)

const FooterMenu = () => (
  <footer className="py-3">
    <Container>
      <Row>
        <Col>
          Site Map
          <hr/>

            <p>
              <button className="btn3">About Fluory</button>
            </p>
            <p>
              <button className="btn3">Muay Thai</button>
            </p>
            <p>
              <button className="btn3">Jiu-Jitsu</button>
            </p>
            <p>
              <button className="btn3">MMA</button>
            </p>
            <p>
              <button className="btn3">Boxing

              </button>
            </p>
            <p>
              <button className="btn3">Casual

              </button>
            </p>
            <p>
              <button className="btn3">Fitness

          </button></p>
        </Col>
        
        <Col>
          Follow us
          <hr/>
          <p><Col className = "btn3"><Facebook/></Col></p>

        </Col>
        <Col>
          Support
          <hr/>
          <p><Col className = "btn3">Payment</Col></p>
          <p><Col className = "btn3">Shipping policy</Col></p>
          <p><Col className = "btn3">Return&Refund Policy</Col></p>
          <p><Col className = "btn3">Terms & Conditions</Col></p>
          <p><Col className = "btn3">Privacy Policy</Col></p>
          <p><Col className = "btn3">Contact Us</Col></p>
        </Col>
        <Col>
          CONTACT US
          <hr/>
          <p><Col className = "btn3">WhatsApp: +86 13528501617</Col></p>
          <p><Col className = "btn3">Email: info@fluory.com</Col></p>
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