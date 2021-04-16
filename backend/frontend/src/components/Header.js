import React from 'react'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import { LinkContainer, Link} from 'react-router-bootstrap'


function Header() {
    return (    
        <header>
            <Navbar variant = "blue" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/home"><i className='fas fa-stopwatch'></i> 20 Together Minutes</Navbar.Brand>
                    </LinkContainer>
                
                    <Navbar.Toggle aria-controls="basic-navbar-nav"><i className="fas fa-bars"></i></Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                   
                    <Nav className="mr-auto">

                    <NavDropdown title={<span><i className="fa fa-book"></i> Books</span>} id="basic-nav-dropdown" to="/books">
                            <LinkContainer to="/books">
                            <NavDropdown.Item>All Books</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/category">
                            <NavDropdown.Item>Book Categories</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>

                        <NavDropdown title={<span><i className="fa fa-microphone"></i> AudioBooks</span>} id="basic-nav-dropdown" to="/books">
                            <LinkContainer to="/audio">
                            <NavDropdown.Item id="nav-dropdown-item">All Audio</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/category">
                            <NavDropdown.Item>Book Categories</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>  
                    </Nav>
                    <Nav>
                        <LinkContainer to='/login'>
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>    

                        <LinkContainer to='/signup'>
                            <Nav.Link>Sign Up</Nav.Link>
                        </LinkContainer>
                                         
                    </Nav>
                    
                    </Navbar.Collapse>
                    </Container>
                    
            </Navbar>
                
            </header>
        
    )
}

export default Header
