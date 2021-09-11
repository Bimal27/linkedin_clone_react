import { Container,Row,Col,Button } from "react-bootstrap";
import { Component } from "react";
import {BsImage} from 'react-icons/bs'
import {IoLogoYoutube} from 'react-icons/io'
import {MdEventNote} from 'react-icons/md'
import {RiArticleLine} from 'react-icons/ri'
import '../Education.css' 
import HomeTopModel from "./HomeTopModel";
import {Link} from 'react-router-dom'

class HomeTop extends Component{



    render(){
        return(
            <div  >
            <Container className='mt-5 shadow' >
                <Row className='justify-content-center' >
                <Col style={{border : '1px solid gainsboro',borderRadius:'8px',padding:'5px',backgroundColor:'white'}}   className=' px-2 '>
                        <div className='d-flex mt-2'>
                    <Link to='/profile'><img style={{borderRadius:'52px',width:'52px'}} src='https://picsum.photos/100' height='50px' alt="" /></Link>
                    
                    <HomeTopModel/>
                   
                    
                    </div>
                    <div className='mt-3'>
                        <Row style={{justifyContent:'space-around'}}>
                            <div> 
                            <span className='sup d-flex' style={{justifyContent:'space-around',marginTop:'6px'}}> 
                                <BsImage style={{fontSize:'1.5rem',color:'skyblue',marginLeft:'10px'}}/>
                                <h6 style={{marginTop:'4px', marginLeft:'10px'}}>Photo</h6>
                             </span>
                            </div>
                            <div>
                            <span className='sup d-flex' style={{justifyContent:'space-around',marginTop:'6px'}}> 
                                <IoLogoYoutube style={{fontSize:'1.5rem',color:'green'}}/>
                                <h6  style={{marginTop:'4px', marginLeft:'10px'}}>Video</h6>
                             </span>
                            </div>
                            <div>
                            <span className='sup d-flex' style={{justifyContent:'space-around',marginTop:'6px'}}> 
                                <MdEventNote style={{fontSize:'1.5rem',color:'orange'}}/>
                                <h6 style={{marginTop:'4px', marginLeft:'10px'}}>Event</h6>
                             </span>
                            </div>
                            <div>
                            <span className='sup d-flex' style={{justifyContent:'space-around',marginTop:'6px'}}> 
                                <RiArticleLine style={{fontSize:'1.5rem',color:'pink'}}/>
                                <h6 style={{marginTop:'4px', marginLeft:'10px',marginRight:'10px'}}>Write Article</h6>
                             </span>
                            </div>
                        </Row>
                    </div>
                    </Col>

                </Row>
            </Container>
            </div>
        )
    }
}
export default HomeTop

