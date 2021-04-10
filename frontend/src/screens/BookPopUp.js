import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'

import Rating from '../components/Rating'


function BookPopUp({match}) {


    const [book, setBook] = useState([])

    useEffect(() => {

        async function fetchBook(){
            const {data} = await axios.get(`/api/books/${match.params.id}`)
            setBook(data)
        }
        fetchBook()
    }, [])


    return (
        <div>
            <Link to='/books' className= 'btn btn-light my-3'> Go Back</Link>
            <Row>
                <Col lg={6}>
                    <Image src= {book.image} alt= {book.name} fluid/>

                </Col>
                
                <Col md={3}>
                    <ListGroup variant="flush">
                        <h3>
                            {book.name}
                        </h3>
                    </ListGroup>
                </Col>
                
                <Col md={3}>


                </Col>

            </Row>
        </div>
    )
}

export default BookPopUp
