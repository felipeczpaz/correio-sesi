/*
************************************************************
*                                                          *
*   Flowhooks Software - Open Source License               *
*                                                          *
*  This software is licensed under the GNU Affero General   *
*  Public License v3. You may use, modify, and distribute   *
*  this code under the terms of the AGPLv3.                *
*                                                          *
*  This program is distributed in the hope that it will be  *
*  useful, but WITHOUT ANY WARRANTY; without even the       *
*  implied warranty of MERCHANTABILITY or FITNESS FOR A     *
*  PARTICULAR PURPOSE. See the GNU AGPLv3 for more details. *
*                                                          *
*  Author: Felipe Cezar Paz (git@felipecezar.com)          *
*  File:                                                   *
*  Description:                                            *
*                                                          *
************************************************************
*/
// src/components/Navbar/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar: React.FC = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" data-bs-theme="dark" className="shadow">
      <Container>
        <Navbar.Brand as={Link} to="/">Correio Sesi</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="text-muted" 
              onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} 
              onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              className="text-muted" 
              onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} 
              onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}
            >
              About
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/contact" 
              className="text-muted" 
              onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} 
              onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}
            >
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link 
              as={Link} 
              to="/login" 
              className="text-muted" 
              onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} 
              onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}
            >
              Login
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/register" 
              className="text-muted" 
              onMouseEnter={(e) => e.currentTarget.classList.remove('text-muted')} 
              onMouseLeave={(e) => e.currentTarget.classList.add('text-muted')}
            >
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
