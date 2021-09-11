
import { Component } from 'react'
import "../style.css";
import { Container, Row,Col } from 'react-bootstrap'
import {FiEdit} from 'react-icons/fi'
import {BsChevronCompactDown} from 'react-icons/bs'


class MessageTop extends Component {

    state = {
        profiles: [],

    }

    componentDidMount = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/profile/', {

                headers: {
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTM1ZTM0MDdiZTZjMTAwMTVmOWRiYTUiLCJpYXQiOjE2MzA5MjY3NTYsImV4cCI6MTYzMjEzNjM1Nn0.PLWB0OwFXpY_BhYhvSaxQ1MXjj62jzUvJQCe6_HUleU",
                }
            })
            if (response.ok) {
                const data = await response.json()
                this.setState({
                    profiles: data
                })
                console.log(data);
            }

        } catch (error) {
            console.log('error')

        }
    }

    render() {

        return (

            <div  className='my-5' style={{backgroundColor:'white'}}>
                <Container>
                    <Row>
                        <Col  className='shadow'>
                        <div className='d-flex mt-3'> 
                          {this.state.profiles.filter((p) => p.name === 'Bimal Kumar').slice(0,1).map(p => (<img class='message-img' src={p.image} alt='profile'/>))}
                          <h6 className='ml-3 mt-2'>Messaging</h6>
                          <div className='ml-auto'>
                          <span>...</span>
                          <FiEdit className='mx-3'/>
                          <BsChevronCompactDown onClick={(e) =>{
                              this.setState({showMessage: !this.state.showMessage})
                          }}/>
                          </div>
                         
                        </div>
                        <input className='w-100 mt-2' style={{backgroundColor:"rgb(241, 239, 239)",border:'transparent',borderRadius:'3px'}} placeholder='Search messages'></input>
                        { 
                            this.state.profiles.slice(0,12).map(p =>{
                                return(
                                   <div key={p._id} className="d-flex my-4 chat">
                                     <img className='message-img mr-3' src={p.image} alt='profile'/>
                                     
                                     <h6 className='mt-2'>{p.name} {p.surname}</h6>
                                     <div className='ml-auto'>
                                     <h6 className='mt-2 '>Jul 25</h6>
                                     </div>
                                     
                                    </div>
                                )
                                
                                
                            })
                        }
                       
                        </Col>
                    </Row>

                </Container>
            </div>

        )

    }

}
export default MessageTop