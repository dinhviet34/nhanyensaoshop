import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import logo from '../Images/logo.jpg';
import '../Css/Menu.css';

function Banner() {
   
    return (
        <div  className="boudermenu">
            <div>
                <img src={logo} alt="logo" id="logo"></img>
            </div>
            <div>
                <h2 class="animate-charcter"> Nhàn yến sào</h2>
                  
                
            </div>

        </div>
        /*<Navbar bg="navbar-light bg-light" expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="logo" id="logo"></img>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => scrollToRef(home)}>Trang chủ</Nav.Link>
                        <Nav.Link onClick={() => scrollToRef(prod)}>Sản phẩm</Nav.Link>
                        <Nav.Link onClick={() => scrollToRef(add)}>Cửa hàng</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='boudermenu'>
            
            <div>
                <ul id='menu'>

                    <li>
                       
                    </li>
                    <li>
                        <Link to='/' className='link'>Sản phẩm</Link>
                    </li>
                    <li>
                        <Link to='/' className='link'>Giới thiệu</Link>
                    </li>


                </ul>
            </div>

        </div>*/






    )
}
export default Banner;