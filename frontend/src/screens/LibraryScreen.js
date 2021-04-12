

import React, {useEffect} from 'react' 
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import { addToLibrary } from '../actions/libraryActions'



function LibraryScreen({match, location, history}) {

    const bookId = match.params.id
    const qty = 1
   
    const dispatch = useDispatch()

    //to pull data from local storage and use
    const library = useSelector(state => state.library)
    const { libraryItems} = library
    console.log('libraryItems:', libraryItems)

    useEffect (()=>{

        if(bookId){
            dispatch(addToLibrary(bookId, qty))
        }

    }, [dispatch , bookId, qty])

    return (
       <Row>

            <Col md = {8}>
                <h1>Library</h1>
                { libraryItems.length === 0 ? (
                    <Alert variant = 'info'>
                        Your Library is Empty <Link to = '/'> Go Back </Link>
                    </Alert>
                 ) : (
                     <ListGroup variant = 'flush'>
                         {libraryItems.map( item =>(
                             <ListGroup.Item key = {item.book}>
                                <Row>
                                    <Col md={6}>
                                         <Link to= {`/book/${item.book}`}>
                                            <Image src={item.image} alt={item.name} fluid rounded/>
                                        </Link>
                                    </Col>
                                </Row>
                             </ListGroup.Item>
                         ))}
                     </ListGroup>
                 )} 
            </Col>

       </Row>
    )
}

export default LibraryScreen
