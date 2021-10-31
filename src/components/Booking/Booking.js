import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';
import './Booking.css';
const Booking = () => {
    const { bookingId } = useParams();
    const [details, setDetails] = useState([]);
    // const [specificDetail,setSpecificDetail] = useState({})
    const history = useHistory();
    useEffect(() =>
        fetch(`https://guarded-thicket-64732.herokuapp.com/tours/${bookingId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
        , [])

    // Place order part 
    const { user } = useAuth();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        data.email = user?.email;
        // data.status="pending"
        fetch('https://guarded-thicket-64732.herokuapp.com/placeOrder', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if(result.insertedId){
                    alert('Order Processed Successfull');
                    reset();
                }
            })
        //         console.log(result));
        // console.log(data);
    }
        //   useEffect(() =>{
        //     if(details.length>0){
        //         const matchedData= details.find(detail=> detail.key==bookingId)
        //         setSpecificDetail(matchedData);
        //     }

        // }

        // ,[details])
        const handleClick = () => {
            history.push('/home')
        }
        return (
<>
            <div className="container my-5 image">
                <h2>We Care about you ...</h2><br />
                <div className="card mb-3" >
                    <div className="row g-0 service_single">
                        <div className="col-md-4 col-lg-4 col-6">
                            <img src={details?.img} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-8 col-lg-8 col-6">
                            <div className="card-body text-start">
                                <h3 className="card-title text-primary">{details?.name}</h3>
                                <h5 className="card-text text-secondary">{details?.description}</h5>

                            </div>

                        </div>
                        <div><button className="btn btn-warning mb-2 text-white" onClick={handleClick}>Back to Home</button>
                        </div>
                    </div>
                    </div>
        
                        <div>
                            <h1 className="mt-5 text-center text-info">
                                Please give some Details
                            </h1>
                            <div className="login-box w-25 m-auto mt-5">
                                <div className="event-box border border d-flex justify-content-center align-items-center">
                                    <div className="login-form">
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <input 
                                            defaultValue={user?.displayName}
                                                {...register("name")}
                                                placeholder="Name"
                                                className="p-2 m-2"
                                            />
                                            <br />

                                            <input
                                            defaultValue={user?.email}
                                                {...register("email", { required: true })}
                                                placeholder="Email"
                                                className="p-2 m-2"
                                            />
                                            <br />
                                            <input
                                                {...register("date", { required: true })}
                                                placeholder="date"
                                                defaultValue={new Date()}
                                                className="p-2 m-2"
                                            />
                                            <br />
                                            <input
                                                {...register("address", { required: true })}
                                                placeholder="Adderss"
                                                className="p-2 m-2"
                                            />
                                            <br />
                                            <input
                                                {...register("mobeli_number", { required: true })}
                                                placeholder="Mobile Number"
                                                className="p-2 m-2"
                                            />
                                            <br />
                                            {errors.exampleRequired && <span>This field is required</span>}

                                            <input type="submit" className="btn btn-info w-50" />
                                        </form>
                                        {/* <p className="m-2 mb-2">
                                            already have account?{" "} */}
                                            {/* <Link to="/login">
                                                <span className="text-danger">create account</span>
                                            </Link> */}

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
    
</>

        );
    };
export default Booking;

