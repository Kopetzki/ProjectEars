import React, {useState, useEffect} from 'react'
import { Row,Col, Carousel, CarouselItem, Image} from 'react-bootstrap'
import Books from '../components/Books'
import axios from 'axios'

import books from '../books'


function HomeScreen() {
    return (
        <div>
            <h1>Home Page</h1>
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
        </div>
    )
}

export default HomeScreen
