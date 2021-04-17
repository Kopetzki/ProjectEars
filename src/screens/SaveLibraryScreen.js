import React from 'react'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { Button, Row, Col, ListGroup, Image, Card, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'


function SaveLibraryScreen() {

    const library = useSelector(state => state.library)


    return (
        <div>
          

            <Row>
                <Col>
                    <ListGroup>
                        <ListGroup.Item>
                            <h2>Library Items</h2>
                            { library.libraryItems.length === 0 ? <Message variant = 'primary'>
                                Your Library Is Empty 
                            </Message> : (
                                <ListGroup variant='flush'>
                                    {library.libraryItems.map((item, index) => (
                                        <ListGroup.Item key = {index}>
                                            <Row>
                                                <Col md = {8}>
                                                    <Image src= {item.image} alt={item.name} fluid rounded/>
                                                </Col>
                                                <Col>
                                                    <Link to={`/book/${item.book}`}>{item.name}</Link>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                    
                                </ListGroup>
                            )}

                        </ListGroup.Item>
                    </ListGroup>
                </Col>

            </Row>
        </div>
    )
}

export default SaveLibraryScreen
