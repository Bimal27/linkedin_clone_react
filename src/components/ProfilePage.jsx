import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import About from './About'
import Profile from './Profile'
import SidebarOptional from './SidebarOptional';
import Dashboard from './Dashboard';
import Education from './Education';
import Interests from './Interests';
import Profiles from './Profiles';
import Footer from './Footer';
import TopNavbar from './TopNavbar';
import Messaging from './Messaging';




export default function ProfilePage() {
    return (
        <>
      
        <Container id='profilepage' className='mt-5' >
        <TopNavbar />
            <Row>
                <Col className='col-md-8 ordder-md-1 pr-2'>
                
                   <Profile />
                   <Dashboard />
                   <About />
                   <Education/>
                   
                   <Interests/>
                 
                </Col>
                <Col className='col-md-4 ordder-md-2 pl-3'>
                    <SidebarOptional/>
                  
                    <Profiles heading="People also viewed"/>
                    <Profiles heading="People you may know"/>

                </Col>
            </Row>
            
            <Footer />
        
          </Container>
          
          <span className="message">
            <Messaging  />
         </span>
           
          </>
    )
}