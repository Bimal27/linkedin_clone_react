import {Container, Row, Col} from 'react-bootstrap'
import InterestElements from './InterestElements'

const Interests = () => {

    return(
        <div className='Edu-aligning mt-3 mb-5 shadow interest'>
             <Container >
                <Row>
                <Col className=' text-left'>
                    <div className='mt-3 mb-4'><h5> Interests</h5></div>
                    
                    <InterestElements />
                    <InterestElements />
                    <InterestElements />
                    <hr />
                    <h6 className='mt-0 mb-2  text-bold text-muted' style={{textAlign:'center'}}>See all</h6>
                    </Col>

                </Row>
             </Container>
        </div>
    )
}

export default Interests