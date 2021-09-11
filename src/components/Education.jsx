import {Container, Row, Col, Modal,Button, Form} from 'react-bootstrap'
import EducationElements from './EducationElements'
import {AiOutlinePlus} from 'react-icons/ai'
import { useState, useEffect } from 'react'
import EduAlert from './Alert'

const Education = () => {
  const [Education, setEducation] = useState([])
  const [post, setpost] = useState({})
    const [show, setShow] = useState(false);
    const [render, setrender] = useState(false) 
    // const [alert, setalert] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
      const fetcheexp = async() => {
        try {
          let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/6135e3407be6c10015f9dba5/experiences/',{
            headers: {
              "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU"
          }
          })
          if(response.ok){
              const data = await response.json()
              
              console.log(data)
              setEducation(data)
          }
        } catch (error) {
          console.log(error)
        }
      }
      fetcheexp()
  },[render])

 const handleform = async(e) => {
      e.preventDefault()
      console.log(post)
      try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/6135e3407be6c10015f9dba5/experiences/',{
        method: 'POST',
        body: JSON.stringify(post), 
        headers: {
          'Content-Type': 'application/json',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU"
        }
        })
        if(response.ok){
          alert("posted successfully")
          setShow(false)
          setrender(true)
        }
        
      } catch (error) {
        console.log(error)
      }

 }
 useEffect(() => {
   return () => {
     setrender(false)
   }
 },[])

    return(
        <>
        <div className='Edu-aligning my-3 experience'>
             <Container >
                <Row>
                    <Col className='shadow'>
                    <div className='d-flex justify-content-between'>
                        <h4 className='mt-3'>Experience</h4>
                        {render && <EduAlert/>}
                        <div className='mt-3 ml-4' style={{height:'2rem'}} onClick={handleShow}><AiOutlinePlus className='about-edit'/></div>
                    </div>
                  

            {
              Education.map(ele => <EducationElements eachedu = {ele} key={ele._id}/>)
            }
            
                    </Col>
                </Row>
            </Container>
        </div>

        <Modal show={show} onHide={handleClose} size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Education</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={handleform}>
                <Form.Group className="mb-3" >
                    <Form.Label>School/Company</Form.Label>
                    <Form.Control onChange={(e) =>{setpost({...post, company: e.target.value})}}
                    type="text" placeholder="Eg: Boston University" required/>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Role/Degree</Form.Label>
                    <Form.Control onChange={(e) =>{setpost({...post, role: e.target.value})}}
                    type="text" placeholder="Eg: Boston University" required/>
                </Form.Group>

               <div className='d-flex justify-content-start'>
               <Form.Group className="mb-3" >
                    <Form.Label>Start Date:</Form.Label>
                    <Form.Control onChange={(e) =>{setpost({...post, startDate: e.target.value})}}
                    type="date" placeholder="Eg: Boston University" required/>
                </Form.Group>
                <Form.Group className="mb-3 ml-5" >
                    <Form.Label>End Date:</Form.Label>
                    <Form.Control onChange={(e) =>{setpost({...post, endDate: e.target.value})}}
                    type="date" placeholder="Eg: Boston University" />
                </Form.Group>
               </div>
                
                
                <Form.Group className="mb-3" >
                  <Form.Label>Description/ Field of Study</Form.Label>
                  <Form.Control onChange={(e) =>{setpost({...post, description: e.target.value})}}
                  as="textarea" rows={2} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Area</Form.Label>
                    <Form.Control onChange={(e) =>{setpost({...post, area: e.target.value})}}
                    type="text" placeholder="Eg: Boston University" required/>
                </Form.Group>
                <Button variant="success" type="submit">
                    Save
                </Button>
          </Form>
        </Modal.Body>
        
      </Modal>
       </>
               )
           }
           export default Education
               
               
               
         
