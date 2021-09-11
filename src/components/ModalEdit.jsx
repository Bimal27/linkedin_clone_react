import {Modal,Form, Button, Row, Col} from 'react-bootstrap'
import {useState} from 'react'
import {FaPlus} from 'react-icons/fa';

function ModalEdit () {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title >Edit intro</Modal.Title>
          </Modal.Header>
          <Modal.Body >
           <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Row>
                    <Col>
                    <Form.Label>First Name *</Form.Label>
                    <Form.Control type="text" />
                    </Col>
                    <Col>
                    <Form.Label>Last Name *</Form.Label>
                    <Form.Control type="text" />
                    </Col>
                    
                    </Row>
                    
                </Form.Group>
                <h6 className='text-primary ml-2'>Add former name</h6>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Pronouns</Form.Label>
                    <Form.Control as="select">
                    <option>Please select</option>
                    <option>She/Her</option>
                    <option>He/Him</option>
                    <option>They/Them</option>
                    <option>Custom</option>
                    </Form.Control>
                    <p style={{fontSize:'12px'}}>Let others know how to refer to you. <span className='text-primary' style={{fontSize:'14px'}}>Learn more</span></p>
                </Form.Group>
        
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Headline *</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className='d-flex text-primary my-4'>
                    <FaPlus  />
                    <h5 className='ml-2'>Add current position</h5>
                </div>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Education</Form.Label>
                    <Form.Control as="select">
                    <option>Frankfurt University of Applied Sciences</option>
                    <option>Strive School</option>
                    
                    </Form.Control>
                    <h6 className='text-primary my-3'>Add new education</h6>
                    
                </Form.Group>
                <div className='d-flex'>
                   <Form.Check aria-label="option 1" />
                   <p>Show education in my intro</p>
                </div>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Country/Region *</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Row>
                    <Col md={5} lg={4}>
                    <Form.Label>Postal code</Form.Label>
                    <Form.Control type="text" />
                    </Col>
                    <Col md={7} lg={8}>
                    <Form.Label>Locations within this area</Form.Label>
                    <Form.Control type="text" />
                    </Col>
                    
                    </Row>
                    
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Industry *</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                   
                </Form>

            </Modal.Body>
            <Modal.Footer>
           
            <Button variant="primary"  onClick={handleClose}>
              Save
            </Button>
            <Form>
          </Form>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default ModalEdit