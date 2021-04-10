import React, {useState, useEffect} from 'react'
import { Row,Col } from 'react-bootstrap'
import Books from '../components/Books'
import axios from 'axios'

function BookScreen(){
    const [books, setBooks] = useState([])

    useEffect(() => {

        async function fetchBooks(){
            const {data} = await axios.get('/api/books')
            setBooks(data)
        }
        fetchBooks()
    }, [])

    return (
        <div>
            <h1>Flippin Awesome Books</h1>
            <Row>
                {books.map(books => (
                    <Col key={books._id} sm={12} md={6} lg={4} xl={3}>
                       <Books books ={books}/> 
                    </Col>

                ))}
            </Row>
        </div>
    )
}
export default BookScreen