import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import './MyOders.css'

const MyOders = () => {
  const { user } = useAuth();
  const [oders, setOders] = useState([]);
  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch(`https://guarded-thicket-64732.herokuapp.com/myOders/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOders(data));
  }, [user.email]);

  console.log(oders);
//   const handleDelete= id =>{
//     const url=`https://protected-brushlands-31405.herokuapp.com/services/${id}`
//     fetch(url,{
//         method: 'DELETE'
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         if(data.deletedCount){
//             alert('Deleted Successfully')
//             const remaining=services.filter(service=>service._id !==id);
//         setServices(remaining);
//         }
    
//     })

    const handleDelete = (id) => {
        fetch(`https://guarded-thicket-64732.herokuapp.com/deleteOrder/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                alert('Deleted succssfully')
                const remaining=oders.filter(oder=>oder._id !==id);
                setOders(remaining);

              setConrol(!control);
            } else {
              setConrol(false);
            }
          });
        console.log(id);
      };
  
  return (
    <div className="container">
         <div className="row">
      <h1>My Oders : {oders.length}</h1>
      {oders?.map((pd,index) => (
         
              <div className="col-12 col-md-6 col-lg-3  mx-auto ">
                  <div className="single-order">
              <img height="100px" className="rounded-circle" src={pd?.img} alt="" />
              <h5>{pd.name}</h5>
              <p>Order:{pd._id}</p>
              <p>{pd.email}</p>
              <p>Address:{pd.address}</p>
              <p>Mobile No:{pd.mobeli_number}</p>
                <p className="text-primary fw-bold">${pd.price}</p>
                
            <div className="d-flex justify-content-evenly">
            <div>
               <button className="btn bg-warning p-2">{pd?.status}</button></div>
               <div>
          <button
           onClick={() => handleDelete(pd._id)}
                className="btn bg-danger p-2"
              >
                  Delete
                  </button>
              </div>
        </div> 
        </div>  
        </div> 
    
     ) )}
      </div>
</div>     
  );
};

export default MyOders;