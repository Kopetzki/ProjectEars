import React from 'react'
import {Container , Row, Col } from 'react-bootstrap'


function Footer() {
    return (
       
        <footer className="footer">
            <Container>
                <Row> 
                    <Col className="text-center py-2">
                    Copyright &copy; 20TogetherMinutes
                    </Col>
                </Row>
            </Container>
            
        </footer>
     
    )
}

export default Footer
