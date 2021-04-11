import { Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { Button } from 'react-bootstrap'
import AudioBooks from './AudioBooks'

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
            <Modal.Title>Listen and Learn</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <ReactAudioPlayer src="./Audiobooks/book1.m4a" autoPlay controls/>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Close
            </Button>
            
           
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default AudioModal