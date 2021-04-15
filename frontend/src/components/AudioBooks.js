
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import AudioModal from'./AudioModal'
{/*
function AudioModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
            Click here for Audio
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>audio book title</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <ReactAudioPlayer src="./Audiobooks/book1.m4a" autoPlay controls/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

*/}


function AudioBooks({audiobooks}) {
    return (
        <Card className= 'my-3 p-3 rounded'>
            <Link to={`/audio/${audiobooks._id}`}>
                <Card.Img src={audiobooks.image} />
            </Link>
            <Card.Body>

                <a href = 'https://heyzine.com/flip-book/2f58000614.html'>Link to</a>

              <Link to={'https:heyzine.com/flip-book/2f58000614.html'}>
                <Card.Title as="div">
                    <strong>{audiobooks.name}</strong>
                </Card.Title>
              </Link>

              <Card.Text as="div">
                  <div className ='my-3'>
                      <Rating value = {audiobooks.rating} text = {`${audiobooks.numReviews} reviews`} color={'#f8e825'}/>
                  </div>
              </Card.Text>
              <Button ><AudioModal /></Button>
          </Card.Body>



        </Card>

    )
}

export default AudioBooks;

