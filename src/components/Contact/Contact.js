import React from 'react';
import "./Contact.css"

const Contact = () => {
    return (
        <div className="container my-5">
            {/* contact address section */}
            <h2 className="text-center fw-bold text-primary fw-2 mt-4">Contact Details</h2>
            <div className="row mt-5">
                <div className=" text-start col-md-6 col-12 col-lg-6">

                    <h2 className="text-secondary">Get In Touch: </h2>

                    <div className="right-footer-container  ">

                        <div className="phone d-flex justify-content-start align-items-start  mt-4">
                            <div className="all-icon ">
                                <i className="fas fa-phone-volume me-2"></i>
                            </div>
                            <div>
                                <h5>+8801776524524 </h5>
                            </div>
                        </div>
                        <div className="phone d-flex justify-content-start align-items-start  mt-4">
                            <div className="all-icon ">
                                <i className="far fa-envelope me-2"></i>
                            </div>
                            <div>
                                <h6>tour_hub@gmail.com </h6>
                            </div>
                        </div>
                        <div className="phone d-flex align-items-start justify-content-start mt-4">
                            <div className="all-icon ">
                                <i className="fas fa-map-marker-alt me-2"></i>
                            </div>
                            <div>
                                <h6>
                                    2750 Quadra Street Victoria Road,
                                    <br /> 102 1st Avenue,Gulshan,Bangladesh.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12 col-lg-6 support text-dark fw-bolder p-2">
                <h2 className="text-secondary">You Will Get Here</h2>
                    <div className="text-info text-center">
                        <p>Best Selection</p>
                        <p>Expert Tour Guide Team</p>
                        <p>Best Price Gurantee</p>
                        <p>24/7 Support</p>
                    </div>
                </div>
                </div>
            </div>

    

    );
};

export default Contact;