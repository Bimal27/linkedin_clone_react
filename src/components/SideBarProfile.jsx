import { Component } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import { BsBookmarkFill } from 'react-icons/bs';
import { IoIosSquare } from 'react-icons/io';



class SideBarProfile extends Component{
 state={
     profile:null
 }
    componentDidMount = async ()=>{
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/profile/me',{
                headers:{
                   Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU",
                }
            })
            if(response.ok){
              let data = await response.json()
              this.setState({profile: data})
              console.log(this.state.profile)
            }
          
            
        } catch (error) {
           console.log(error)
        }
    }
    render(){
        return(
            <>
            <div className="left-side-wrap shadow mt-5">
                <Container>
                    { this.state.profile && (
                    <Row>
                        <Col>
                       
                                    <div className="image-wrap">
                                        <img className="side-image" src={this.state.profile.image} alt="profile" />
                                    </div>
                                    
                                    <div className="mt-5">
                                        <h5 style={{textAlign:'center'}}>{this.state.profile.name} {this.state.profile.surname}</h5>
                                        <p style={{textAlign:'center',fontSize:'15px'}} className='text-muted'>{this.state.profile.bio}</p>
                                    </div>
                              
                        <hr />
                            <div className='d-flex justify-content-between' style={{lineHeight:'4px'}}>
                                <p className='text-muted' >Connections </p><span className="text-primary">52</span> 
                                
                            </div>
                           
                            <h6 style={{lineHeight:'0px'}}>Grow your network</h6>
                            <div className='d-flex justify-content-between mt-3' >
                                <p className='text-muted' >Who viewed your profile </p><span className="text-primary">52</span> 
                                
                            </div>
                            <hr />
                            <div>
                                <p className='text-muted p-0' style={{lineHeight:'3px' ,fontSize:'14px'}}>Access exclusive tools & insights</p>
                                <p style={{lineHeight:'3px'}}><IoIosSquare style={{height:'22px', width:'22px' ,color:'orange'}}/> Try premium for free</p>
                            </div>
                            <hr />
                            <div>
                            <div className='d-flex'><BsBookmarkFill style={{height:'22px', width:'22px'}}/><p className='ml-3 mb-3'>My Items</p> </div>
                            </div>
                        </Col>    
                    </Row> 
                    )
          }   
                </Container>
            </div>
        
            </>
        )
    }
}
 export default SideBarProfile
