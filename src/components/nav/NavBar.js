import React, { useState, useEffect } from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
      return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">Caddy Hack</NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="mr-2"><FontAwesomeIcon icon={faBars} /></NavbarToggler>
            <Collapse isOpen={isOpen} navbar>
              <Nav navbar>
              <NavItem>
                    <NavLink href="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/profile">
                        Profile
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/scores">
                        Scores
                    </NavLink>
                </NavItem>
              </Nav>
              {
                 (localStorage.getItem("ch_token") !== null) ?
                     <NavItem>
                         <NavLink
                             onClick={() => {
                                 localStorage.removeItem("ch_token")
                                 history.push({ pathname: "/" })
                             }}
                         >Logout</NavLink>
                     </NavItem> :
                     <>
                         <NavItem>
                             <NavLink href="/login">
                                 Login
                             </NavLink>
                         </NavItem>
                         <NavItem>
                             <NavLink href="/register">
                                 Register
                             </NavLink>
                         </NavItem>
                     </>
             }
            </Collapse>
          </Navbar>
        </div>
      );
    }

// export const NavBar = () => {
//     const history = useHistory()
//     constructor(props) {
//         super(props);
    
//         this.toggleNavbar = this.toggleNavbar.bind(this);
//         this.state = {
//           collapsed: true
//         };
//       }
    
//       toggleNavbar() {
//         this.setState({
//           collapsed: !this.state.collapsed
//         });
//       }
//       render() {
//     return (
//         <div>
//             <Navbar
//                 color="faded"
//                 light
//             >
//                 <NavbarBrand
//                     className="me-auto"
//                     href="/"
//                 >
//                     Caddy Hack
//                 </NavbarBrand>
//                 <NavbarToggler
//                     className="me-2"
//                     onClick={function noRefCheck() { }}
//                 />
//                 <Collapse navbar
//                 isOpen>
//                     <Nav navbar>
//                         <NavItem>
//                             <NavLink href="/">
//                                 Home
//                             </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink href="/profile">
//                                 Profile
//                             </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink href="/scores">
//                                 Scores
//                             </NavLink>
//                         </NavItem>
//                     </Nav>
//                 </Collapse>
//             </Navbar>
//             {
//                 (localStorage.getItem("ch_token") !== null) ?
//                     <li className="nav-item">
//                         <button className="nav-link fakeLink"
//                             onClick={() => {
//                                 localStorage.removeItem("ch_token")
//                                 history.push({ pathname: "/" })
//                             }}
//                         >Logout</button>
//                     </li> :
//                     <>
//                         <NavItem>
//                             <NavLink href="/login">
//                                 Login
//                             </NavLink>
//                         </NavItem>
//                         <NavItem>
//                             <NavLink href="/register">
//                                 Register
//                             </NavLink>
//                         </NavItem>
//                     </>
//             }        </div>
//     )
// }
