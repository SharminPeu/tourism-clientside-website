import React from "react";
// import "./AddEvents.css";
import { useForm } from "react-hook-form";
// import useFirebase from "../../Hook/useFirebase";
import useAuth from "../../hooks/useAuth";

const AddService = () => {
  const { user } = useAuth();
  

  const {
    register,
    handleSubmit,reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.email = user?.email;
    fetch('https://guarded-thicket-64732.herokuapp.com/addTourPackage', {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(result => {
      if(result.insertedId)
      {
          alert('Added Successfully');
          reset();
      }
      console.log(result);
    console.log(data);
      })
    }
  return (
    <div className="container">
      <h1 className="mt-5 text-center text-info">Please Add A Tour Package</h1>
      <div className="login-box m-auto mt-5">
        <div className="event-box  d-flex justify-content-center align-items-center">
          <div className="login-form ">
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("key")}
                placeholder="Key"
                className="p-2 m-2 w-100"
              />
              <br/>
              <input
                {...register("name")}
                placeholder="Name"
                className="p-2 m-2 w-100"
              />
              <br />
              <input
              {...register("duration")}
             placeholder="Duration"
                className="p-2 m-2 w-100"
              />
               <br />
              <input type="number" {...register("price")} placeholder="Price"
               className="p-2 m-2 w-100" />
              
              <br />
              <input
              {...register("location")}
                 placeholder="Location"
                
                className="p-2 m-2 w-100"
              />
               <br />
               <input
                {...register("description")}
                placeholder="Description"
                className="p-2 m-2 w-100"
              />
              <br/>
      {/* <input {...register("img")} placeholder="Image url" 
       className="p-2 m-2 w-100"/> */}
        <input
                {...register("img", { required: true })}
                placeholder="Image Link"
                className="p-2 m-2 w-100"
              />
              
               
              <br />

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" value="Add" className="btn btn-info w-50" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;