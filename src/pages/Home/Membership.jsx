import React from "react";

const Membership = () => {
    return (
        <section id="all_membership">
            <div className="container py-5">
                <div className="row membership__large">
                    <div className="col-lg-6">
                        <div className="card large__card h-100 p-5 text-dark">
                            <h4 className="text-center">SURGE NOTIFY MEMBERSHIP</h4>
                            <p className="text-muted pt-3">Whats included</p>

                            <ul className="featured-list">
                                <li>Singles/Bulk offers 3-4 times a week</li>
                                <li>24/7 admin support</li>
                                <li>Free legit checks</li>
                                <li>Access to our WTB/WTS marketplace</li>
                            </ul>

                            <div className="mt-5">
                                <button className="btn bg-red text-light w-75 d-block m-auto">Join Us</button>
                            </div>
                            <button className="corner-budge btn bg-red text-light px-4">£20 P/M</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="">
                            <h1 className="display-4 fw-700">
                                LEARN HOW TO EARN, <span className="text-red">RISK FREE</span> TODAY.
                            </h1>
                            <p className="">
                                The premium sneaker group built to provide resellers and collectors with the tools and resources they need to have a competitive edge on hyped releases! Surge Notify
                                will teach you the simple yet very lucrative potential of what the resell business has to offer!
                            </p>
                            <p>
                                From successfully securing profits to understanding the very basics of business, our industry-leading methods and support are sure to guide you on your path to multiple
                                streams of income!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="membership-two-card py-5">
                    <div className="row justify-content-center">
                        {[...new Array(1)].map((item) => (
                            <div className="col-lg-5 col-md-6 col-sm-8 mt-5">
                                <div className="card text-dark p-5 membership-small-card">
                                    <h2 className="text-center title">Year Membership</h2>
                                    <h3 className="text-center text-red price">£200 GBP.</h3>
                                    <p className="text-center validity">Valid for 12 months from purchase date</p>
                                    <div className="text-center button">
                                        <button className="btn bg-red text-light">Buy Now</button>
                                    </div>
                                    <p className="terms small">
                                        By purchasing, you agree to our
                                        <a href="/" className="">
                                            Terms of Service.
                                        </a>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;
