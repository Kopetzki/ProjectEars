import React from 'react'
import { Row,Col } from 'react-bootstrap'
import AudioBooks from '../components/AudioBooks'

import audiobooks from '../audiobooks'


function AudioScreen() {
    return (
        <div>
            <h1 align="center">Awesome Audio Books</h1>
            <Row>
                {audiobooks.map(audiobooks => (
                    <Col key={audiobooks._id} sm={12} md={6} lg={4} xl={3}>
                       <AudioBooks audiobooks ={audiobooks}/> 
                    </Col>

                ))}
            </Row>
        </div>
    )
}

export default AudioScreen