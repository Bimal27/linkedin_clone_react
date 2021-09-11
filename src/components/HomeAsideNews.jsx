
import { TiInfoLarge   } from 'react-icons/ti'
const HomeAsideNews = () => {
    return ( 
        <div className='shadow mt-2 right-sidebar'>
            
            <div className='d-flex justify-content-between'>
            <h5 className='mt-2 mx-3'>Today’s top courses</h5>
            <TiInfoLarge className='mt-3 mr-3' style={{backgroundColor:'grey',color:'white'}}/>
        </div>
          <p className="text-muted mx-3" style={{fontSize:'12px',}}>These are the day’s trending courses <br></br>on LinkedIn Learning.</p>
          <ol>
              <li className='mr-1 my-1'>
               <bold>UX Design:5 Creating Scenarios and S...</bold> <br></br>
               <span className='text-muted' style={{fontSize:'14px'}}>Chris Nodder</span>
              </li>
              <li className='mr-2 my-2'>
                Digital Transformation... <br></br><span className='text-muted' style={{fontSize:'14px'}}>Peter High</span>
              </li>

              <li className='mr-2'>
              15 Secrets Successful People Know about Time Management (getAbstract Summary)... <br></br><span className='text-muted' style={{fontSize:'14px'}}>getAbstract</span>
              </li>
          </ol>

        </div>
    )
}
 
export default HomeAsideNews;