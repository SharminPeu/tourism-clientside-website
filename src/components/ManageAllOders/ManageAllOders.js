import React, { useEffect, useState } from "react";
import './ManageAllOders.css'
const ManageAllOders = () => {
    const [allOders, setAllOders] = useState([]);
    const [control, setConrol] = useState(false);

    useEffect(() => {
        fetch('https://guarded-thicket-64732.herokuapp.com/allOders')
            .then((res) => res.json())
            .then((data) => setAllOders(data));
    }, [control]);
    //   Handle delete 
    const handleDelete = (id) => {
        fetch(`https://guarded-thicket-64732.herokuapp.com/deleteOrder/${id}`, {
            method: "DELETE",
            headers: { "content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.deletedCount) {
                    alert('Are you sure to delete your order?')

                    const remaining = allOders.filter(allOder => allOder._id !== id);
                    setAllOders(remaining);
                    setConrol(!control);
                } else {
                    setConrol(false);
                }
            });
        console.log(id);
    };
    //   Handle Update
    const handleApproved = (id) => {
        console.log(id);
        fetch(`https://guarded-thicket-64732.herokuapp.com/approvedOrder/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" }

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.modifiedCount > 0) {
                    alert('Status Updated')
                }
            })
    }

    return (

        <div className="container">
            <div className="row">
                <h1>Manage All Oders : {allOders.length}</h1>
                {allOders?.map((pd, index) => (

                    <div className="col-12 col-md-6 col-lg-3  mx-auto " key={pd._id}>

                        <div className="all-order">
                            <img height="100px" className="rounded-circle" src={pd?.img} alt="" />
                            <h5>{pd.name}</h5>
                            <p>Order:{pd._id}</p>
                            <p className="fw-bold">Who Oders:</p>
                            <p>{pd.email}</p>
                            <p>Address:{pd.address}</p>
                            <p>Mobile No:{pd.mobeli_number}</p>
                            <p className="text-primary fw-bold">${pd.price}</p>

                            <div className="d-flex justify-content-evenly">
                                <div>
                                    <button onClick={() => handleApproved(pd._id)}
                                        className="btn bg-danger p-2">{pd?.status}</button></div>
                                <div>
                                    <button
                                        onClick={() => handleDelete(pd._id)}
                                        className="btn bg-warning p-2"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
        //  <button onClick={()=>handleApproved(pd._id)} className="btn bg-danger p-2">{pd?.status}</button> */}
    );
};

export default ManageAllOders;
