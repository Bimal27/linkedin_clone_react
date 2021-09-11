import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SideBarRecent from './SideBarRecent';
import HomeTop from './Profilepart1/HomeTop';
import SecondComponent from './ProfilePage/SecondComponent';
import SideBarProfile from './SideBarProfile';
import HomeRightSide from './HomeRightSide';
import HomeAsideNews from './HomeAsideNews';
import HomePageFooter from './HomePageFooter';
import TopNavbar from './TopNavbar';
import Messaging from './Messaging';


 function HomePage() {
    return (
        <>
        <Container id='profilepage' className='mt-5' >
        <TopNavbar />
            <Row>
                <Col md={3}>
                    <SideBarProfile />
                    <SideBarRecent />
                </Col>
                <Col md={5}>
                   <HomeTop />
                   <SecondComponent />
                </Col>
                <Col md={4}>
                <HomeRightSide />
                <HomeAsideNews />
                <HomePageFooter />
                </Col>
            </Row>
        </Container>
        <span className="message">
            <Messaging  />
         </span>
       
          </>
    )
}
export default HomePage