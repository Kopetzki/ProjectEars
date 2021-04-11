import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
import axios from 'axios'

import Rating from '../components/Rating'


function BookPopUp({match}) {

    const [book, setBook] = useState([])
    const mystyle = {
        width:"300%",
        height:"300%",
        
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
                        <li class="list-group-item">BOOK NAME: {book.name}</li>
                        <li class="list-group-item">CATEGORY: {book.category}</li>
                        <li class="list-group-item">AGE GROUP: {book.age}</li>
                        <li class="list-group-item">DESCRIPTION: {book.description}</li>
                    </ul> 
                    </ListGroup>
                </Col>
                    
                {/*</Col>
                <Col md={3}>
                <iframe scrolling="no" style = {mystyle} src= {book.heyzine_link}></iframe>
                </Col>*/}
                <div class="bookImage">
                    <a href={book.heyzine_link} target="_blank">
                        <img src={book.image} class="fp-thumb"></img>
                    </a>
                    </div>
            

            </Row>
        </div>
    )
}

export default BookPopUp
