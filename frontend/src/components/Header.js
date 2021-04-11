import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
    return (
        
        <header>
            <Navbar variant = "blue" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/home"><i className='fas fa-stopwatch'></i> 20 Together Minutes</Navbar.Brand>
                    </LinkContainer>
                
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                   
                    <Nav className="mr-auto">
                        <LinkContainer to='/books'>
                            <Nav.Link ><i className='fas fa-book'></i> Books</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to= '/audio'>
                        <Nav.Link ><i className='fas fa-microphone'></i> Audio</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to = '/sign up'>
                            <Nav.Link> Login / Sign Up</Nav.Link>
                        </LinkContainer>
                      
                    </Nav>
                
                    </Navbar.Collapse>
                    </Container>
            </Navbar>

            
                
            </header>
        
    )
}

export default Header
