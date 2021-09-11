import React from 'react'
import '../navbarstyles.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Row } from 'react-bootstrap'

import { TiHome } from "react-icons/ti";
import { FaUsers, FaBell } from "react-icons/fa";
import { IoIosBriefcase } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiMessage3Fill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { Link } from 'react-router-dom';


export default function TopNavbar() {



    return (
        <div id='topNavbar'>
            <Navbar className='justify-content-between align-items-center p-0 flex-nowrap mt-2'>
                <Row className=' align-items-center flex-nowrap' style={{marginLeft:'160px'}}>
                    <Navbar.Brand > <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png" alt="logo" /> </Navbar.Brand>
                    <Form style={{width: '250px'}}>
                        <IoSearchSharp />
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="mr-2"
                            aria-label="Search"
                        />
                    </Form>
                </Row>
                <Row  style={{marginRight:'160px'}}>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mr-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <div className='menuItems'>
                            <Link to='/' ><TiHome /></Link>
                                <Nav.Link>Home</Nav.Link>
                            </div>
                            
                            <div className='menuItems'>
                                <FaUsers />
                                <Nav.Link>My Network</Nav.Link>
                            </div>
                            <div className='menuItems'>
                                <IoIosBriefcase />
                                <Nav.Link>Jobs</Nav.Link>
                            </div>
                            <div className='menuItems'>
                                <Link to='/message' ><RiMessage3Fill /></Link>
                                <Nav.Link>Messaging</Nav.Link>

                            </div>
                            <div className='menuItems'>
                                <FaBell />
                                <Nav.Link>Notifications</Nav.Link>
                            </div>
                            <div className='menuItems line'>
                                <Link to='/profile'><img src="https://picsum.photos/200" alt="profile" /></Link>
                                <NavDropdown title="Me" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className="menuItems">
                                <CgMenuGridR />
                                <NavDropdown title="Work" id="navbarScrollingDropdown">
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                                </NavDropdown>
                            </div>
                            <div className='menuItems'>
                                <h5>Retry Premium <br/> Free</h5>
                            </div>
                        </Nav>

                    </Navbar.Collapse>
                </Row>

            </Navbar>
        </div>
    )
}
