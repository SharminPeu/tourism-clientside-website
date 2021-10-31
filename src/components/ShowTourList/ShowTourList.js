import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './ShowTourList.css'

const ShowTourList = (props) => {
    const { _id, name, price, img, description } = props.tours;
    const history = useHistory();
    const handleDetails = (_id) => {
        const uri = `/booking/${_id}`
        history.push(uri)
    }


    return (
        <div className="mx-auto col-md-6 my-5 image">
            <div className="tour card ">
                <div className="image" >
                    <img className="img-fluid " src={img} alt="" />
                </div>

                <div className="text-start  mt-3">
                    <h5 className="fw-bold fs-3 text-center"> {name}</h5>
                    <p><span className="fw-bold text-secondary">{description}</span> </p>
                    <div className="d-flex justify-content-evenly fst-bold fs-2">
                        <div> <p className="text-primary">${price}</p></div>

                        <div className="">
                            <button onClick={() => handleDetails(_id)} className="btn btn-primary">Book Now</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ShowTourList;