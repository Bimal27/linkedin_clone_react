import {Button} from "react-bootstrap";

const PeopleUMayKnow = ( props ) => {
    return(
        <section style={{paddingLeft:'5px'}}>
            <ul style={{paddingLeft:'0'}}>
            <li className='d-flex' style={{listStyle:'none'}}>
            <div ><a href="#"><img style={{borderRadius:'52px',width:'52px'}} src={props.dataobj.image} height='50' alt="" /></a></div>
            <div style={{paddingLeft:'1rem'}}>
                <h6  style={{marginBottom:'0px',fontSize:'1rem'}}>{props.dataobj.name+'  '+props.dataobj.surname}</h6>
                <p  className='text-muted' style={{marginBottom:'5px',fontSize:'0.8rem'}}>{props.dataobj.title}</p>

                <div><Button className="connect" style={{borderRadius:'30px', padding:'2px 12px'}} 
                variant="outline-dark">Connect</Button></div>
            </div>
            </li>
            </ul>
        </section>
        )
}
export default PeopleUMayKnow