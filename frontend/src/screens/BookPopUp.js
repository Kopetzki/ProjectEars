import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'

import Rating from '../components/Rating'


function BookPopUp({match}) {


    const [book, setBook] = useState([])
    const mystyle = {
        width:"100%",
        height:"350%"
      };

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

                <Col md={3}>
                    <ListGroup variant="flush">
                    <ul class="list-group">
                        <li class="list-group-item list-group-item-primary">Book name: {book.name}</li><br></br>
                        <li class="list-group-item list-group-item-success">Category: {book.category}</li>
                        <li class="list-group-item list-group-item-primary">Age Group: {book.age}</li>
                        <li class="list-group-item list-group-item-success">Description: {book.description}</li>
                    </ul> 
                    </ListGroup>
                </Col>
                
                <Col lg={6}>
                <iframe scrolling="no" style = {mystyle} src= {book.heyzine_link}></iframe>

                </Col>

            </Row>
        </div>
    )
}

export default BookPopUp
