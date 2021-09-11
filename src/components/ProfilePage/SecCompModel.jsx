import { useState } from 'react'
import {Col, Row, Modal, Button} from 'react-bootstrap'
import {BiPhotoAlbum} from 'react-icons/bi'
import {AiOutlineEye} from 'react-icons/ai'
import {MdModeEdit} from 'react-icons/md'
import {RiDeleteBin5Line} from 'react-icons/ri'
import NewsFeedImageUpload from './NewsFeedImageUpload'

const SecCompModel = (props) => {
    
    const [lgShow, setlgShow] = useState(false)
    const [newsfeedupload, setnewsfeedupload] = useState(false)

    return(
        <>
        <Col style={{ padding: '0px' }}>

                    <img 
                    onClick = {(e) => {setlgShow(true)}}
                    className='img-fluid' style={{ objectFit: 'cover', overflow: 'hidden' }} 
                    src={props.image} alt="click here to upload an image" />
                </Col>
                <Modal
        size="md"
        show={lgShow}
        onHide={() => setlgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="modal-bg">
          <Modal.Title id="example-modal-sizes-title-lg" className='profile-edit-title'>
            NewsFeed Photo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body-profile modal-bg">
            <p className='text-muted'>Click on Image to change or upload photo</p>
          <p style={{textAlign: 'center'}}>
            <img
              src='https://picsum.photos/100'
              alt="#"
              className="profile-pic-modal rounded-circle"
            //   onClick={() => this.setState({lgShow:true})}
             onClick={(e) => {setnewsfeedupload(true)}}
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

        {newsfeedupload && <NewsFeedImageUpload id={props.id}/>}

           </Row>
           {/* { this.state.finalupload && <ProfileImageUpload profile={this.state.profile}/>} */}
                  
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default SecCompModel