import { BrowserRouter as Router, Route } from "react-router-dom"
import { Col,Row, Container } from "react-bootstrap"
import Footer from "./Footer"
import TopNavbar from "./TopNavbar"
import MessageTop from "./MessageTop"
const MessageSingle= () =>{
 return(

<Container>
    <Router>
            <Row>
                <TopNavbar />
                  <Col className='col-md-6  pr-2' >
                    
                    <Route path="/message" exact component={MessageTop} />

                  </Col>
                  <Footer />
            </Row> 
        </Router>
               
</Container>
 )
}
export default MessageSingle