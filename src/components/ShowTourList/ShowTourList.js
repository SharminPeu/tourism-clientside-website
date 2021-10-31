import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './ShowTourList.css'

const ShowTourList = (props) => {
    const {_id,name, img, description } = props.tours ;
    const history= useHistory();
    const handleDetails=(_id)=>{
        const uri= `/booking/${_id}`
        history.push(uri)
    }
        // const uri= `/booking/${_id}`
        // console.log(uri);
        // history.push(`/booking/${_id}`)
    
    return (
        <div className="mx-auto col-md-6 my-5 image">
            <div className="tour card ">
                <div className="image" >
                    <img className="img-fluid " src={img} alt="" />
                </div>

                <div className="text-start  mt-3">
                    <h5 className="fw-bold"> Place:{name}</h5>
                    <p> <span className="text-secondary fw-bold ">Description: </span><span className="fw-bold text-primary">{description}</span> </p>
                    <div className="text-center">
                    <button onClick={()=>handleDetails(_id)} className ="btn btn-primary">See Details</button>
{/* 
                    <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link> */}
                        {/* <Link to='/tours' className="btn btn-warning mb-2 ">Details</Link> */}
                    </div>
                </div>
                </div>
                </div>

                );
};

 export default ShowTourList;