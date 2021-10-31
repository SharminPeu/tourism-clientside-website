import React, { useState } from "react";
// import useFirebase from "../../Hook/useFirebase";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

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
                alert('Deleted Successfully')
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
    <div>
      <h1>My Oders : {oders.length}</h1>
      {oders?.map((pd, index) => (
        //   <tbody>
        //     <tr>
        <ul>
              <li>{index}</li>
              <li>{pd.img}</li>
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
    </div>
  );
};

export default MyOders;