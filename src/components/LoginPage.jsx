import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useState } from 'react';


export default function LoginPage() {

    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      
    }

    setValidated(true);

  };
  const onclick =(e) =>{
    setTimeout(() => {

        this.props.history.push('/')
        
    }, 1000)
  }

    return (
        <>
      
    <div  style={{backgroundColor:'white', marginTop:'5%'}}>

    
        <Container>
        <Row className='justify-content-center'><img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" alt="logolarge" style={{height:'125px',width:'125px'}} /></Row>
            <Row className=" justify-content-center my-5">
                <Col md={6} className="border border-white shadow rounded-4 py-3" >
                <h1>Sign in</h1>
                <p>Stay updated on your proffesional world</p>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                     <Form.Group controlId="formGroupEmail">
                            <Form.Control 
                            required 
                            type="email" 
                            placeholder="Enter email" 
                            />
                            <Form.Control.Feedback type="invalid">
                                Please enter a valid email address
                            </Form.Control.Feedback>
                    </Form.Group>
                     <Form.Group controlId="formGroupPassword">
                            <Form.Control 
                            required 
                            type="password" 
                            placeholder="Password" 
                            />
                            <Form.Control.Feedback type="invalid">
                                Password incorrect. Typos, am I right?
                            </Form.Control.Feedback>
                     </Form.Group>
                </Form>
                <a href="">Forgot password?</a>
                <Button variant="primary" size="lg" block onClick={onclick}>
                    Sign in
                </Button>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}