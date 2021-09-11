

import { TiInfoLarge   } from 'react-icons/ti'
import { FcNews   } from 'react-icons/fc'

const HomeRightSide = () =>{
return(
  <div className='shadow mt-5 right-sidebar'>
        <div className='d-flex justify-content-between'>
            <h5 className='mt-2 mx-3'>LinkedIn News</h5>
            <TiInfoLarge className='mt-3 mr-3' style={{backgroundColor:'red',color:'white'}}/>
        </div>
        <hr />
        <div className='mx-3'>
               <div className='d-flex'>
                <FcNews className='news'/><p style={{fontSize:'15px'}} >Pingdemic’ hits supermarket shelves  , time: 2h ago , readers: 670 </p> 
              </div>
              <div className='d-flex'>
               
                <FcNews className='news'/> <p style={{fontSize:'15px'}}> Netflix CEO responds to 'Slack firing', time: 1d ago , readers: 364,268 
                </p>
                </div>
                <div className='d-flex'>
                <FcNews className='news'/><p style={{fontSize:'15px'}}>Tell me about your hobbies, time: 17h ago, readers: 71,738</p>
                </div>

                <div className='d-flex'>
                <FcNews className='news'/><p style={{fontSize:'15px'}}> My salary? Shhh, it’s a secret, time: 3d ago , readers: 37,540</p>
                </div>
                <div className='d-flex'>
                <FcNews className='news'/> <p style={{fontSize:'15px'}}>Europe’s first ‘super app’?', time: 22h ago, readers: 4,750 </p>
                </div>
                <div className='d-flex'>
                <FcNews className='news'/> <p style={{fontSize:'15px'}}>Govt triples initial NHS pay offer, time: 10h ago, readers: 1,646 </p>
                </div>
                <div className='d-flex'>
                <FcNews className='news'/><p style={{fontSize:'15px'}}>Business backlash over ‘pingdemic’, time: 2d ago , readers: 4,814 </p>
                </div>
                <div className='d-flex'>
                <FcNews className='news'/> <p style={{fontSize:'15px'}}>Border checks cut for UK travellers, time: 1d ago , readers: 3,648 </p>
                </div>
        </div>
      
        </div>
   )
}
export default HomeRightSide