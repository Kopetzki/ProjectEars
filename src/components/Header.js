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
            <Navbar bg= 'light' variant = "blue" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand href="/home"><i className='fas fa-stopwatch '></i>20TogetherMinutes </Navbar.Brand>
                    </LinkContainer>
                
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                   
                    <Nav className="mr-auto">
                        <LinkContainer to='/books'>
                            <Nav.Link ><i className='fas fa-book'></i>Books</Nav.Link>
                        </LinkContainer>
                        
                        <LinkContainer to= '/audio'>
                        <Nav.Link ><i className='fas fa-microphone'></i>Audio</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to= '/library'>
                        <Nav.Link ><i className='fas fa-library'></i>Library</Nav.Link>
                        </LinkContainer>

                        { userInfo ? (
                            <NavDropdown title = {userInfo.name} id = 'username'>
                                <LinkContainer to = '/profile'> 
                                    <NavDropdown.Item>Profile</NavDropdown.Item>
                                </LinkContainer>

                                <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>

                            </NavDropdown>
                        ) : (

                                <LinkContainer to = '/login'>
                                <Nav.Link> Login/Sign Up</Nav.Link>
                                </LinkContainer> 
                        )}

                        
                      
                    </Nav>
                
                    </Navbar.Collapse>
                    </Container>
            </Navbar>

            </header>
        
    )
}

export default Header
