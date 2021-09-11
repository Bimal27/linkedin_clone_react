import { Image } from "react-bootstrap"

const InterestElements = () => {
    return(
        <div className='d-flex justify-content-start  mb-0'>
            <div className='d-flex justify-content-between mr-3'>
            <Image style={{border:'none', background:'none'}}
                src="https://images.unsplash.com/photo-1630865769398-670d8de09d72?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" roundedCircle 
                className='interestsizeimage mr-4'/>
             <div className='mt-2'><h6 className='text-bold mb-0 textsize'>Career for freshers and all</h6> 
             <span className='text-muted mt-0 textsize'>293,069 followers</span></div>
             
            </div>
            <div className='d-flex justify-content-between  mb-3' style={{marginLeft:'auto'}}>
            <Image 
                src="https://images.unsplash.com/photo-1630865769398-670d8de09d72?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" roundedCircle  
                className='interestsizeimage mr-4'/>
            <div className='mt-2'>
                <h6 className='text-bold mb-0 textsize'>Dublin Business School for all</h6>
                <span className='text-muted mt-0 textsize'>121,035 followers</span>
             </div>
            </div>
            <hr />
        </div>
    )
}
export default InterestElements