import React from 'react'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {logout} from '../actions/userActions'


function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }


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
                            <NavDropdown.Item>Audio Categories</NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown> 
        
                         <LinkContainer to= '/library'>
                        <Nav.Link ><i className='fas fa-library'></i>Library</Nav.Link>
                        </LinkContainer>
        
                    </Nav>
                    <Nav>
                    { userInfo ? (
                            <NavDropdown title = {userInfo.name} id = 'username'>
                                <LinkContainer to = '/profile'> 
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>

                                <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>

                            </NavDropdown>
                        ) : (

                                <LinkContainer to = '/login'>
                                <Nav.Link> Login</Nav.Link>
                                </LinkContainer>
                                 
                        )}
                        <LinkContainer to = '/register'>
                                <Nav.Link> Register</Nav.Link>
                                </LinkContainer> 
                                         
                    </Nav>
                    
                    </Navbar.Collapse>
                    </Container>
                    
            </Navbar>
                
            </header>            
        
    )
}

export default Header
