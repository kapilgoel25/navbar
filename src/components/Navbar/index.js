import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink,} from './NavbarElements';
import { Link } from 'react-router-dom';
const Navbar = ()=>{
    return(
        <>
        
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/about' activestyle="active">
                        About
                    </NavLink>
                    <NavLink to='/events' activestyle="active">
                        Events
                    </NavLink>
                    <NavLink to='/annual' activestyle="active">
                        Annual Report
                    </NavLink>
                    <NavLink to='/team' activestyle="active">
                        Teams
                    </NavLink>
                    <NavLink to='/blogs' activestyle="active">
                        Blogs
                    </NavLink>
                    <NavLink to='/sign-up' activestyle="active">
                        Sign-Up
                    </NavLink>
                    {/*Second Nav */}
                    {/*<NavBtnLink to='/sign-in'>Sign In</NavBtnLink>*/}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default Navbar;