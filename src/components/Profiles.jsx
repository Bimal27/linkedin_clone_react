import { Component } from "react";
import { Container,Row,Col} from "react-bootstrap";
import PeopleUMayKnow from "./PeopleUMayKnow";

      
class Profiles extends Component {
        
    state={
        data : [],
        showlessormore : false
        }
        componentDidMount = async () =>{
            try {
                const response = await fetch(
                    "https://striveschool-api.herokuapp.com/api/profile/",
                    {
                        method : 'Get',
                        headers: {
                        Authorization:
                        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMDkxOTJkNTI2MjAwMTViNmRjZjgiLCJpYXQiOjE2MzA5MjM4NzUsImV4cCI6MTYzMjEzMzQ3NX0.TCddF1CE5a5ejNaYb4Hvlfai6JtlaSiqqZGFnWmvRhg"
                        }
                    }
              );
              
    const profiles = await response.json();
        console.log(profiles);
        if(response.ok){
        this.setState({data: profiles, showlessormore: true});
        }
        else{
            console.log('failed')
            }
        } 
        catch (error) 
            {
            console.log(error);
            }
        }
    
render(){
    return(
    <Container className='mt-3 shadow  sidebar'>
    <Row className='justify-content-end' >
    <Col className='px-2 d-none d-md-block '>
    <h5 
        style={{marginBottom:'20px'}} 
        className='text-heading-medium mt-4'
    >
        <strong className="ml-2">{this.props.heading}</strong>
    </h5>
    {
        this.state.showlessormore 
            ? this.state.data.slice(0,5).map(e => <PeopleUMayKnow dataobj={e} key={e._id}/>)
            : this.state.data.slice(0,9).map(e => <PeopleUMayKnow dataobj={e} key={e._id}/>)
    }        
    <hr style={{border: '1px solid gainsboro',marginBottom:'0'}}/>

    <button 
        onClick={() => this.setState({showlessormore: !this.state.showlessormore})} 
        style={{
            border: 'none', 
            backgroundColor:'Transparent',
            textAlign:'center',
            margin:'auto',
            display:'flex',
        }}>
        {
            this.state.showlessormore
                ? <span className="mr-2 my-1 ">Show more<i className="bi bi-chevron-compact-down ml-3 mt-2"></i></span>
                : <span className="mr-2 my-1 ">Show less<i className="bi bi-chevron-compact-up   ml-3 mt-2"></i></span>
        }
    </button>
            </Col>        
            </Row>
            </Container>
              )
            }
        }          
                                                 
      export default Profiles

