import React, { useEffect, useState } from "react";
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
          console.log(data)
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
//   const handleApproved=(id)=>{
// const updateStatus="Approved"
// const newData={...allOders,updateStatus}
//         fetch(`https://guarded-thicket-64732.herokuapp.com/approveOrder/${id}`, {
//           method: "PUT",
//           headers: { "content-type": "application/json" },
//           body: JSON.stringify(newData)

//         })
//         .then(res=>res.json())
//         .then(data=>{
//             if(data.modifiedCount>0){
//                 alert('Status Updatted')
//             }})
//             // console.log(data))
//         }

  return (
    <div>
      <h1>AllOders {allOders?.length}</h1>
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
              <li><img src={pd.img} alt="" /></li>
              <li>{pd?.name}</li>
              <li>{pd?.email}</li>
              <li>{pd?.date}</li>
              
              <button
                onClick={() => handleDelete(pd._id)}
                className="btn bg-danger p-2"
              >
                Delete
              </button>
              {/* <button onClick={()=>handleApproved(pd._id)} className="btn bg-danger p-2">{pd?.status}</button> */}
              </ul>
        ))}
        

         {/* ...
  </table> */}
  </div>

  );
};

export default ManageAllOders;
