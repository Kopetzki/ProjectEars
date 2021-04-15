
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'





function Books({books}) {
    return (
        <Card className= 'my-3 p-3 rounded'>
            <Link to={`/book/${books._id}`}>
                <Card.Img src={books.image} />
            </Link>
            <Card.Body>

                

              <Link to={'https:heyzine.com/flip-book/2f58000614.html'}>
                <Card.Title as="div">
                    <strong>{books.name}</strong>
                </Card.Title>
              </Link>

              <Card.Text as="div">
                  <div className ='my-3'>
                      <Rating value = {books.rating} text = {`${books.numReviews} reviews`} color={'#f8e825'}/>
                  </div>
              </Card.Text>
              
          </Card.Body>



        </Card>

    )
}

export default Books;

