import React from 'react'
import {Col } from 'react-bootstrap'


function Footer() {
    const today = new Date();
    return (
       
        <footer className="footer">
            <Col className="text-center py-2">
                Copyright &copy; 20TogetherMinutes {today.getFullYear()}
            </Col>
        </footer>
    )
}

export default Footer
