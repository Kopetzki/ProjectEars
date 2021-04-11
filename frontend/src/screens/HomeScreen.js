import React, {useState, useEffect} from 'react'
import { Row,Col, Carousel, CarouselItem, Image, Jumbotron, Container} from 'react-bootstrap'
import Books from '../components/Books'
import axios from 'axios'

import books from '../books'


function HomeScreen() {
    return (
        <div>
            <h1 align="center">Welcome!</h1>
            <h3 align="center">Check out our recent book additions</h3>
            <Jumbotron fluid>
                <Container>
                <Carousel pause = 'hover' className ='bg-black'>
                <CarouselItem>
                   <Image src = './images/book1.jpg'></Image>
                </CarouselItem>
                <CarouselItem>
                   <Image src = './images/book2.jpg'></Image>
                </CarouselItem>
                <CarouselItem>
                    <Image src = '/images/book3.jpg'></Image>
                </CarouselItem>
            </Carousel>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default HomeScreen
