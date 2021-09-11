import {Container, Row, Col} from 'react-bootstrap'
import { FaSatelliteDish } from "react-icons/fa"
import { IoMdPeople } from "react-icons/io"
import { IoMdCash } from "react-icons/io"
import { IoIosBookmark } from "react-icons/io"
import { RiStarLine } from "react-icons/ri"


const Dashboard = () => {
    return(
        <div className='Edu-aligning mt-2 mb-2  '>
            <Container className=' shadow dashboard'>
                <Row>
                <Col>
               
                    <h5 className='text-left mt-3 pl-2'>Your Dashboard</h5>
                    <div className='d-flex justify-content-between'>
                    <h6 className='text-left text-muted fontstyle pl-2'>Private to You</h6>
                     <span className='mr-2'><RiStarLine /><span className='text-muted ml-2 mt-2'> All Star</span></span>
                     </div>
                    <Row className='mt-4 px-4'>
                        <Col md={12} className='shadow ' style={{backgroundColor:'white',borderRadius:'8px', padding:'16px 10px'}}> 
                            <div className='d-flex justify-content-between'>
                                <div className='dashboard-text'>
                                <h4 className='text-primary'>45</h4>
                                <p>Who viewed Your profile</p>
                            
                                </div>
                                <div className='dashboard-text'>
                                <h4 className='text-primary'>45</h4>
                                <p>Post views</p>
                                </div>
                                <div className='dashboard-text'>
                                <h4 className='text-primary'>12</h4>
                                <p>Search appearances</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mt-4 px-4 mb-3' >
                        <Col md={12} className='shadow ' style={{backgroundColor:'white',borderRadius:'12px'}}>
                            <div className='d-flex justify-content-start  mt-2' style={{borderBottom: '1px solid gainsboro'}}>
                                <span> <FaSatelliteDish /></span>
                                <div className='ml-3 dashboard-text' >
                                    <h6 className='text-left mb-0'>Creater mode: <span className='text-muted'>Off</span></h6>
                                    <p className='mt-0 dashtextsize'>Some random lorem ipsum text here...</p>
                                </div>
                                
                            </div>
                            <div className='d-flex justify-content-start mt-2' style={{borderBottom: '1px solid gainsboro'}}>
                                <span><IoMdPeople /></span>
                                <div className='ml-3 dashboard-text'>
                                    <h6 className='text-left mb-0'>My Network</h6>
                                    <p className='mt-0 dashtextsize'>Manage random lorem ipsum text here...</p>
                                </div>
                               
                            </div>
                            <div className='d-flex justify-content-start  mt-2 ' style={{borderBottom: '1px solid gainsboro'}}>
                                <span><IoMdCash /></span>
                                <div className='ml-3 dashboard-text'>
                                    <h6 className='text-left mb-0'>Salary insights</h6>
                                    <p className='mt-0 dashtextsize'>See random lorem ipsum text here...</p>
                                </div>
                               
                            </div>
                            <div className='d-flex justify-content-start  mt-2'>
                                <span><IoIosBookmark /></span>
                                <div className='ml-3 dashboard-text'>
                                    <h6 className='text-left mb-0'>My items</h6>
                                    <p className='mt-0 dashtextsize'>Keep random lorem ipsum text here...</p>
                                </div>
                                
                            </div>
                            
                           
                        </Col>
                    </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Dashboard