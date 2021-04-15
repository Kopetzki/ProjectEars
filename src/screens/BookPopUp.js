import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Row, Col, Image, ListGroup, Button, Card} from 'react-bootstrap'
//import axios from 'axios'

import Rating from '../components/Rating'
import { listBookDetails } from '../actions/bookActions'



function BookPopUp({match , history}) {
     const dispatch = useDispatch()
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
                        <ListGroup.Item>
                                <Button
                                    onClick={addToLibrary}
                                    className='btn-block'
                                  //  disabled={product.countInStock == 0}
                                    type='button'>
                                     Add to Library
                                </Button>
                                            </ListGroup.Item>                        
                    </ListGroup>
                </Col>
                
                <Col md={3}>


                </Col>

            </Row>
        </div>
    )
}

export default BookPopUp
