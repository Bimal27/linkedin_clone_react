import React from 'react'
import { Container, Row} from 'react-bootstrap'
import { AiFillQuestionCircle } from "react-icons/ai";

export default function SidebarOptional() {
    return (
        <div id='sidebaroptionalmenu' className='mb-3 mt-5 shadow'>
            <Container >
                <Row>
                 
                    <h2>Edit Public Profile & URL</h2>
                    <AiFillQuestionCircle />
                </Row>
                <Row>
                   
                   <h2>Add profile in another language</h2> 
                   <AiFillQuestionCircle />
                
                </Row>
            </Container>

        </div>
    )
}