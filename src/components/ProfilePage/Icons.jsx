import { GrLike } from 'react-icons/gr'
import { FaRegCommentDots } from 'react-icons/fa'
import { FaShare } from 'react-icons/fa'
import { RiSendPlaneFill } from 'react-icons/ri'
import { Row, Col } from 'react-bootstrap'
import { useState } from 'react'
const Icons = () => {

    const [like, setlike] = useState(0)
    const [comment, setcomment] = useState(false)

    return (
        <>
            <Row className='mt-2 justify-content-center'>

                <div className='mr-4 mt-2 d-flex backg' style={{ borderBottom: '1px solid gray', borderRadius: '8px' }}>   <h6 className='mr-2'>{like}</h6>  <GrLike onClick={(e) => {
                    setlike(like + 1)
                }} />          <h6 className='ml-2 text-muted'>Likes</h6>     </div>
                <div className='mr-4 mt-2 d-flex backg' style={{ borderBottom: '1px solid gray', borderRadius: '8px' }}>    <FaRegCommentDots onClick={(e) => {
                    setcomment(!comment)
                }} /><h6 className='ml-2 text-muted'>Comment</h6>  </div>

                <div className='mr-4 mt-2 d-flex backg' style={{ borderBottom: '1px solid gray', borderRadius: '8px' }}>    <FaShare />         <h6 className='ml-2 text-muted'>Share</h6>    </div>
                <div className='mr-4 mt-2 d-flex backg' style={{ borderBottom: '1px solid gray', borderRadius: '8px' }}>    <RiSendPlaneFill /> <h6 className='ml-2 text-muted'>Send</h6>     </div>

            </Row>

            {comment && <Row className='justify-content-center mt-2'>
                <Col md={6} className='shadow' >
                    <h5>hello</h5>
                </Col>
            </Row>
            }
        </>

    )
}
export default Icons