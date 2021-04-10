import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'

import Rating from '../components/Rating'


function BookPopUp({match}) {

    const [book, setBook] = useState([])
    const mystyle = {
        width:"150%",
        height:"150%"
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
            <Col md={3}>
            <Link to='/books'>
                <Button  variant="outline-primary">Go Back</Button>
            </Link>
            </Col><br></br>
            
            <Row>
                <Col md={3}>
                    <ListGroup variant="flush">
                    <ul class="list-group">
                        <br></br>
                        <li class="list-group-item list-group-item-primary">Book Name: {book.name}</li>
                        <li class="list-group-item list-group-item-success">Category: {book.category}</li>
                        <li class="list-group-item list-group-item-primary">Age Group: {book.age}</li>
                        <li class="list-group-item list-group-item-success">Description: {book.description}</li>
                    </ul> 
                    <h3>TOP OR BOTTOM??</h3>
                    <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Book name
                        <span class="badge badge-primary badge-pill">{book.name}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Category
                        <span class="badge badge-primary badge-pill">{book.category}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Age Group
                        <span class="badge badge-primary badge-pill">{book.age}</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Description {book.description}
                    </li>
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
