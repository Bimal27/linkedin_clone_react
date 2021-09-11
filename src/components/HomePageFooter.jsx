import {FaChevronDown} from 'react-icons/fa'

const HomePageFooter = () =>{
    return(
        <div className=' mx-5 mt-4 text-muted' style={{fontSize:'14px'}}>
           <div className='d-flex justify-content-between'>
                <p>About</p>
                <p>Accessibility</p>
                <p className='mr-4'>Help Center</p>
            </div>
            <div className='d-flex mx-3'>
                <p className='mr-3'>Impressum</p>
                <p>Privacy & Terms</p><FaChevronDown className='mt-1 ml-2'/>
                
            </div>
            <div className='d-flex mx-5'>
                <p className='mr-2'>Ad Choices</p>
                <p>Advertising</p>
                
            </div>
            <div className='d-flex business'>
                <p className='mr-0'>Business Services</p><FaChevronDown className='mt-1 ml-1 mr-2' />
                <p className='app'>Get the LinkedIn app</p>
                
            </div>
            <div className='d-flex justify-content-center'>
                <p className='mr-2'>More</p>
                
            </div>
            <div className='d-flex'>
               <div className='logo'><img src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png" style={{height:'42px' ,width:'76px'}} alt="logolarge" /></div>
               <p className='mt-2'>LinkedIn Corporation © 2021</p>
                
            </div>
            
        </div>

    )
}
export default HomePageFooter