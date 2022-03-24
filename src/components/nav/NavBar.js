import React, { useState, useEffect } from "react"
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap"
import "./NavBar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom"

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()
      return (
        <div>
          <Navbar light>
            <NavbarBrand href="/" className="me-auto" style={{"color": "green", "textAlign": "center"}}>Caddy Hack</NavbarBrand>
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} className="me-2"/>
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
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }