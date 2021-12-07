import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-center">
                        <p>&copy; Restock World</p>
                    </div>
                    <div className="col-12 col-md-5 ms-auto justify-content-between d-flex flex-column align-items-center">
                        {[
                            {
                                text: "Terms and Condition",
                                link: "/terms",
                            },
                            {
                                text: "Contact us",
                                link: "/terms",
                            },
                            {
                                text: "Twitter",
                                link: "/terms",
                            },
                        ].map((item) => (
                            <Link className="text-decoration-none d-inline-block" to={item.link}>
                                {" "}
                                <p>{item.text}</p>{" "}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
