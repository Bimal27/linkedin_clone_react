 import { useState } from "react";
import { Container, Row, Col,Modal,Button,Form } from "react-bootstrap";
 import {MdEdit} from 'react-icons/md'


 const About = ()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
     <>
     <Container className='my-4 about shadow'>
       
         <Row>
             <Col  >
                <div className='d-flex ml-3 mt-3 justify-content-between'>
                    <h4 >About</h4>
                    <MdEdit className='about-edit' onClick={handleShow}/>
                </div>
                <p className='ml-3'>As a master degree in Information Technology, I am looking for a company where I can apply my knowledge. In addition to the analytical skills, I want to offer a lot of energy and enthusiasm. You will find me a reliable person who enjoys working with other people and being part of a team environment. I have also learned to think in a positive way. 
                This was the key to develop new ideas which would help me to develop as a person and become a better problem solver.</p>
            </Col>
         </Row>
    </Container>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit about</Modal.Title>
            </Modal.Header>
            <Form.Group controlId="exampleForm.ControlTextarea1" className='mx-3'>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
                Save
            </Button>
            </Modal.Footer>
        </Modal>
     </>
    )
 }
 export default About