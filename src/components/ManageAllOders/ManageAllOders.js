import React, { useEffect, useState } from "react";
// import { Table } from "react-bootstrap";
const ManageAllOders = () => {
  const [allOders, setAllOders] = useState([]);
  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch('https://guarded-thicket-64732.herokuapp.com/allOders')
      .then((res) => res.json())
      .then((data) => setAllOders(data));
  }, [control]);
  const handleDelete = (id) => {
    fetch(`https://guarded-thicket-64732.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
            alert('Deleted Successfully')

            const remaining=allOders.filter(allOder=>allOder._id !==id);
                setAllOders(remaining);
          setConrol(!control);
        } else {
          setConrol(false);
        }
      });
    console.log(id);
  };

  return (
    <div>
      <h1>AllOders {allOders?.length}</h1>
      <div class="table-responsive">
  {/* <table class="table"> */}
 
{/*     
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead> */}
        {allOders?.map((pd, index) => (
        //   <tbody>
        //     <tr>
        <ul>
              <li>{index}</li>
              <li>{pd?.name}</li>
              <li>{pd?.email}</li>
              <li>{pd?.date}</li>
              {/* <button className="btn bg-danger p-2">{pd?.status}</button> */}
              <button
                onClick={() => handleDelete(pd._id)}
                className="btn bg-danger p-2"
              >
                Delete
              </button>
              </ul>
        ))}
        

         {/* ...
  </table> */}
  </div>
    </div>
  );
};

export default ManageAllOders;
