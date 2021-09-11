import { HiUserGroup } from 'react-icons/hi'
import { GoPlus } from 'react-icons/go'
import { Nav } from 'react-bootstrap'

const SideBarRecent = ()=>(
    <div className="border mt-2 shadow" style={{borderRadius:'8px',backgroundColor:'white'}}>
        <div className='mt-3 ml-0'>
        
        <ul style={{listStyle:'none' ,marginLeft:'-20px'}} >
            <h6 className='recent'>Recent</h6>
            <li>
            <Nav.Link className='text' style={{color:'black'}} href="https://www.linkedin.com/groups/8689804/"><HiUserGroup className='mr-1'/>UNI-2020-2021</Nav.Link>
            </li>
            <h6 className='mt-4 text-primary recent'>Groups</h6>
            <Nav.Link  className='text' style={{color:'black', }} href="https://www.linkedin.com/groups/8689804/"><HiUserGroup className='mr-1'/>UNI-2020-2021</Nav.Link>
            <p className='ml-2 mt-2 text'>See all</p>
            <div className='d-flex justify-content-between mb-1'><h6 className='text-primary recent'>Events</h6><GoPlus className='mr-3'/></div>
           <h6 className='text-primary recent'>Followed Hashtags</h6>
        </ul>
        <hr></hr>
        <Nav.Link style={{color:'black' ,textDecoration:'none'}} href='https://www.linkedin.com/mynetwork/discover-hub/'><h5 className='text-muted' style={{textAlign:'center', marginBottom:'10px'}}>Discover more</h5></Nav.Link>
        </div>
    </div>
)
export default SideBarRecent