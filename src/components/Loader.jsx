import { Spinner, Row,Col } from "react-bootstrap"


const Loader = () => (
    <Row className='d-flex justify-content-center mt-5'>
        <Col md={6}>
            <Spinner animation="border" variant="secondary"  style={{marginLeft:'7rem'}}/>
        </Col>
    </Row>
)
export default Loader