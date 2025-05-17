import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import petShopLogo from '../imagens/petShopLogo.png';
import {Link} from 'react-router-dom'

function NavBarMenu() {
  return (
<Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className='navBar'>

            <Link to='/'>
              <img src={petShopLogo} alt='Logo Pet Shop'/>
            </Link>

          </Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link className='menuHome'><Link className='linkPages' to='/'>Home</Link></Nav.Link>
            <Nav.Link className='menu'><Link className='linkPages' to='/BanhoTosa'>Banho e tosa</Link></Nav.Link>
            <Nav.Link className='menu'><Link className='linkPages' to='/HotelResort'>Hotel resort</Link></Nav.Link>
            <Nav.Link className='menu'><Link className='linkPages' to='/Adestramento'>Adestramento</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBarMenu
