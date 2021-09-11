import {Container, Row, Button} from 'react-bootstrap';
import '../headertop.css';
import { BsImage } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import { MdEventNote } from 'react-icons/md';
import { RiArticleLine } from 'react-icons/ri';

const HeaderTop = () => {
    return(
       <div className='header-top shadow'>
        <Container >
        <Row>
            
            <img className="image" src='https://images.freeimages.com/images/large-previews/01a/technology-background-1632715.jpg' alt='profile'/>
            <Button className='post-btn text-muted'>Start a post</Button>
        
        </Row>
        <Row>
             
                        <div>
                            <span className='sup d-flex' style={{ justifyContent: 'space-around', marginTop: '6px' }}>
                                <BsImage style={{ fontSize: '1.5rem', color: 'skyblue' }} />
                                <h6 style={{ marginTop: '4px', marginLeft: '12px' }}>Photo</h6>
                            </span>
                        </div>
                        <div>
                            <span className='sup d-flex' style={{ justifyContent: 'space-around', marginTop: '6px' }}>
                                <IoLogoYoutube style={{ fontSize: '1.5rem', color: 'green' }} />
                                <h6 style={{ marginTop: '4px', marginLeft: '12px' }}>Video</h6>
                            </span>
                        </div>
                        <div>
                            <span className='sup d-flex' style={{ justifyContent: 'space-around', marginTop: '6px' }}>
                                <MdEventNote style={{ fontSize: '1.5rem', color: 'orange' }} />
                                <h6 style={{ marginTop: '4px', marginLeft: '12px' }}>Event</h6>
                            </span>
                        </div>
                        <div>
                            <span className='sup d-flex' style={{ justifyContent: 'space-around', marginTop: '6px' }}>
                                <RiArticleLine style={{ fontSize: '1.5rem', color: 'pink' }} />
                                <h6 style={{ marginTop: '4px', marginLeft: '20px' }}>Write Article</h6>
                            </span>
                        </div>
                </Row>
       
        
        </Container>
       </div>
    )
}
export default HeaderTop