import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ShowTourList from '../ShowTourList/ShowTourList';
import './Home.css'

const Home = () => {
       // set data for home page services from fakedata
       const[tours,setTours]=useState([]);
       // load data from fakedata
       useEffect(()=>{
           fetch('http://localhost:5000/tours')
           .then(res=>res.json())
           .then(data=>setTours(data))
       },[])
    return (
        <div className="container">
            <div>
                <Header></Header>
            </div>

            {/* servicec part  */}
            <div className="text-center course-title">
            <h2><span className="text-primary">We-Cares</span> Services</h2>
            <p className="mb-5">Our main moto to give the best service to all..We insure your better treatment from <br/> us! We claim that you will never regret it!</p>
            </div>
            <div className="mx-auto container">
                <div className="mx-auto row">
                    <div className="col-md-12">
                        <div className="row">
                    {
                       tours.map((tours)=>(<ShowTourList key={tours.key}
                        tours={tours}>

                        </ShowTourList>
                       

                        
                        
                    
                           

                       ))
                   }
                  
                   </div>

                    </div>
                </div>
            </div>
            
        </div>

    );
};

export default Home;