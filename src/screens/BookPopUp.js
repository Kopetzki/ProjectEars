import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
//import axios from 'axios'

import Rating from '../components/Rating'
import { listBookDetails } from '../actions/bookActions'



function BookPopUp({match , history}) {
     const dispatch = useDispatch()
     const mystyle = {
        width:"100%",
        height:"100%",
        
      };
     const bookDetails = useSelector(state => state.bookDetails)
     const {loading, error, book} = bookDetails


    //const [book, setBook] = useState([])

    useEffect(() => {
        dispatch(listBookDetails(match.params.id))
       // async function fetchBook(){
         //   const {data} = await axios.get(`/api/books/${match.params.id}`)
           // setBook(data)
       // }
        //fetchBook()
    }, [dispatch, match])

    const addToLibrary = () =>{
        history.push(`/library/${match.params.id}`)
    }
    
    return (        
        <div>  
        <Col md={3}>
        <Link to='/books'>
            <Button  variant="outline-primary">Return To Library</Button><br></br>
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
                </ListGroup><br></br>

            <Button onClick={addToLibrary} className='btn-block' type='button'>
                Add to Library
            </Button>

            </Col>            
                
            <div class="bookImage">
                <a href={book.heyzine_link} target="_blank">
                    <img src={book.image} class="fp-thumb" style={mystyle}></img>
                </a>
                </div>
        

        </Row>
    </div>
    )
}

export default BookPopUp
