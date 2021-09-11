import { Component } from "react";
import { Container, Row, Col, Card, Modal, Form, Button } from "react-bootstrap";
import "../style.css";
import { MdPhotoCamera } from 'react-icons/md';
import { MdEdit } from 'react-icons/md';
import { FaPlus } from 'react-icons/fa'
import {BiPhotoAlbum} from 'react-icons/bi'
import {AiOutlineEye} from 'react-icons/ai'
import {MdModeEdit} from 'react-icons/md'
import {RiDeleteBin5Line} from 'react-icons/ri'
import ProfileImageUpload from "./ProfileImageUpload";

class Profile extends Component {
    state = {
        profile: null,
        show: false,
        lgShow : false,
        finalupload : false,
        expert : false
    }
    //const [lgShow, setLgShow] = useState(false);
    handleEdit = async (e) => {
        e.preventDefault()
        console.log('hallo')
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {
                method: 'PUT',
                body: JSON.stringify(this.state.profile),
                headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU",

                }
            })
            if (response.ok) {
                alert('Profile edited successfully')
            }


        } catch (error) {
            console.log(error)
        }
    }

    handleClose = () => this.setState({ show: false });
    handleShow = () => this.setState({ show: true })

    componentDidMount = async () => {
     

            try {
                const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me', {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU",
                    }
                })
                if (response.ok) {
                    let data = await response.json()
                    this.setState({ profile: data })
                    console.log(this.state.profile)
                    console.log("Image ", data)
                }
    
    
            } catch (error) {
                console.log(error)
            
        }
    }


    render() {
        return (
            <div className='profileBox shadow mt-5 mb-4' >
                <Container >
                    {
                        this.state.profile && (
                            <Row style={{ padding: '0px', marginLeft: '-30px', marginRight: '-30px' }}>
                                <Col>
                                    <div className="wrapper">
                                        <img className="profileImage" src={this.state.profile.image} alt='profile-pic' onClick={(e) => {
                                            this.setState({lgShow: true})
                                        }}/>
                                    </div>
                                    <MdPhotoCamera className="PhotoCamera" />
                                    <MdEdit className='edit' onClick={this.handleShow} />
                                    <div className='ml-3 profile'>
                                        <h2>{this.state.profile.name} {this.state.profile.surname}</h2>
                                        <h5>{this.state.profile.bio}</h5>
                                        <div className='d-flex'>
                                            <p className="text-muted">{this.state.profile.area}</p>
                                            <Card.Link className="text-primary  ml-2 font-weight-bold" href="#">Contact Info</Card.Link>
                                        </div>
                                        <Card.Link className="text-primary  font-weight-bold" href="#"> 52 connections</Card.Link>
                                        <div className='d-flex my-2'>
                                            <button className='btn btn-primary open'><span className='mx-2'>Open to</span></button>
                                            <button className='add-section'><span className='mx-3'>Add section</span></button>
                                            <button className='more'><span className='mx-3'>More</span></button>
                                        </div>

                                    </div>
                                    <Row>
                                        <Col className='p-0'>
                                            <div className='wrapper-two my-4 ml-4'>
                                                <div className='my-2'>
                                                    <div className='d-flex'><h6 className='mx-3' >Open to work</h6> <span className='ml-auto mr-3'><MdEdit /></span></div>
                                                    <p className='mx-3'>Frontend Developers role</p>
                                                    <h6 className="text-primary mx-3" > See all details</h6>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col className='pl-0'>
                                            <div className='wrapper-three mt-4 mx-2'>
                                                <div className='my-2'>
                                                    <p className='mx-3'>Share that you're hiring and attract qualified candidates</p>
                                                    <h6 className="text-primary mx-3" > Get Started</h6>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>

                                </Col>



                            </Row>
                        )

                    }

                </Container>

                {this.state.profile && (<Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title >Edit intro</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <Form onSubmit={this.handleEdit}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Row>
                                    <Col>
                                        <Form.Label>First Name *</Form.Label>
                                        <Form.Control type="text" value={this.state.profile.name} onChange={(e) => {
                                            this.setState({
                                                profile: {
                                                    ...this.state.profile,
                                                    name: e.target.value
                                                }
                                            })
                                        }} />
                                    </Col>
                                    <Col>
                                        <Form.Label>Last Name *</Form.Label>
                                        <Form.Control type="text" value={this.state.profile.surname} onChange={(e) => {
                                            this.setState({
                                                profile: {
                                                    ...this.state.profile,
                                                    surname: e.target.value
                                                }
                                            })
                                        }} />
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
                                <p style={{ fontSize: '12px' }}>Let others know how to refer to you. <span className='text-primary' style={{ fontSize: '14px' }}>Learn more</span></p>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Headline *</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div className='d-flex text-primary my-4'>
                                <FaPlus />
                                <h5 className='ml-2'>Add current position</h5>
                            </div>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Education</Form.Label>
                                <Form.Control as="select" value={this.state.profile.bio} onChange={(e) => {
                                    this.setState({
                                        profile: {
                                            ...this.state.profile,
                                            bio: e.target.value
                                        }
                                    })
                                }} >
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
                                <Form.Control type="text" value={this.state.profile.area} onChange={(e) => {
                                    this.setState({
                                        profile: {
                                            ...this.state.profile,
                                            area: e.target.value
                                        }
                                    })
                                }} />
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
                                <Form.Control type="text" />
                            </Form.Group>
                            <Button variant="primary" className='float-right' type='submit'>
                                Save
                            </Button>
                        </Form>

                    </Modal.Body>

                </Modal>)
                }
{ this.state.profile &&
    <Modal
        size="md"
        show={this.state.lgShow}
        onHide={() => this.setState({lgShow:false})}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="modal-bg">
          <Modal.Title id="example-modal-sizes-title-lg" className='profile-edit-title'>
            Profile Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-profile modal-bg">
            <p className='text-muted'>Click on Image to change or upload photo</p>
          <p style={{textAlign: 'center'}}>
            <img
              src={this.state.profile.image}
              alt="#"
              className="profile-pic-modal rounded-circle"
            //   onClick={() => this.setState({lgShow:true})}
            onClick={(e) => {this.setState({finalupload:true})}}
            />
          </p>
          <Button className="public-button">
            {" "}
            <AiOutlineEye className="public-icon" />
            Public
          </Button>
        </Modal.Body>
        <Modal.Footer className="modal-bg">
           
           <Row className='d-flex justify-content-center'>
               <Col>
                    <MdModeEdit className="mb-1 ml-1 first-svg"  />
                </Col>
               <Col>
                    <BiPhotoAlbum className="mb-1 ml-1 mt-1 first-svg" />
               </Col>
               <Col>
                    <RiDeleteBin5Line className="mb-1 ml-1 mt-1 first-svg" />
               </Col>

           </Row>
           { this.state.finalupload && <ProfileImageUpload profile={this.state.profile}/>}
            
            {/* <Col className="flex-column mb-0 modal-edit col-1 d-flex first-svg align-items-center justify-content-center" >
              <MdModeEdit className="mb-1 ml-1" size="2x" />
              <span className="mb-0 text-white footer-span ml-1">Edit</span>
            </Col>
            
            <Col className="flex-column mb-0 modal-edit col-3 d-flex second-svg  justify-content-center mr-auto">
            <BiPhotoAlbum className="mb-1 ml-1 mt-1" size="2x"/>
            <span className="mb-0 text-white footer-span ml-1">Frames</span>
            </Col>
            <Col className="flex-column mb-0 modal-edit col-3 d-flex second-svg  justify-content-center align-items-end">
            <RiDeleteBin5Line className="mb-1 ml-1 mt-1" size="2x"/>
            <span className="mb-0 text-white footer-span ml-1">Delete</span>
            </Col> */}
           
                
                 
           
            
            
        </Modal.Footer>
      </Modal>
      }
      
            </div>

        );

    }
}
export default Profile
