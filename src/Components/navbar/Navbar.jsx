import { InlineIcon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink,Outlet } from "react-router-dom";
import logo from "../../Images/nav-logo.jpg"

const Navbar = () => {
    const [IsContentShow, setIsContentShow] = useState(false);

    return (
        <>
            <div>
                <nav className="hnazmul-navbar">
                    <div className="hnazmul-navbar-container container-xxl">
                        <div className="hnazmul-nav-brand">
                            <img style={{maxWidth:100}} src={logo} alt="" />
                        </div>
                        <div onClick={() => setIsContentShow(true)} className="hnazmul-nav-toggle-btn">
                            <button>
                                <InlineIcon height="30px" className="toggler-btn" icon="gg:menu-right-alt" />
                            </button>
                        </div>

                        <div className={`hnazmul-navbar-content ${IsContentShow ? "navbar-show" : ""}`}>
                            <div className="hnazmul-navbar-content-wrapper">
                                <ul onClick={()=> setIsContentShow(false)} className="navbar-list">
                                    <li className="navbar-list-item">
                                        <NavLink to="#" className="navbar-list-link">
                                            Home
                                        </NavLink>
                                    </li>
                                    <li className="navbar-list-item">
                                        <NavLink to="#" className="navbar-list-link">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="navbar-list-item">
                                        <NavLink to="#" className="navbar-list-link">
                                            About
                                        </NavLink>
                                    </li>
                                </ul>
                                <button className="navbar-closer-icon">
                                    <InlineIcon onClick={() => setIsContentShow(false)} height="35px" className="navbar-closer" icon="clarity:times-circle-line" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    );
};

export default Navbar;
