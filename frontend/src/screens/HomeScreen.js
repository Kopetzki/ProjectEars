import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row,Col, Carousel, CarouselItem, Image, Jumbotron, Container} from 'react-bootstrap'
import Books from '../components/Books'
import axios from 'axios'

import books from '../books'


function HomeScreen() {
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
            <h1 align="center">Welcome!</h1>
            <h3 align="center">Check out our recent book additions</h3>
            <Jumbotron fluid>
                <Container>
                    <Carousel pause='hover' className='bg-dark'>
                            {books.map(books => (
                                <Carousel.Item key={books._id}>
                                    <Link to={`/book/${books._id}`}>
                                        <Image src={books.image} />
                                        <Carousel.Caption className='carousel.caption'>
                                        </Carousel.Caption>
                                    </Link>
                                </Carousel.Item>
                            ))}
                            </Carousel>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HomeScreen
