import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams , useNavigate, Link } from "react-router-dom";

const View = () => {
 
 
  const [inputData, setInputData] = useState([]);

  
  const { name, username, email, phone, website } = inputData;
  const { id } = useParams();
  const navigate = useNavigate()


//   const onInputChange = (e) => {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//   };

  useEffect(() => {
    loadUser();
  }, [id]);

  const handleSubmit = (e) => {
    // e.preventDefault();
    // axios.put("https://649c087004807571923757eb.mockapi.io/CRUD/"  + id, inputData)
    // .then((res)=>{
    //     alert('Data updated successfully')
        navigate('/')
    
    
  };

  const loadUser =  () => {
   axios.get('https://649c087004807571923757eb.mockapi.io/Users/' + id)
   .then((res)=>setInputData(res.data))
   .catch((err)=> console.log(err))

 }

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">VIEW</h2>
        <form 
        // onSubmit={handleSubmit}
        >
          <div className="form-group" >
           NAME <input
              type="text"
              className="form-control form-control-lg"
            
              name="name"
              value={name}
            
            />
          </div>
          <div className="form-group">
        <div>USERNAME</div>    <input
              type="text"
              className="form-control form-control-lg"
           
              name="username"
              value={username}
            
            />
          </div>
          <div className="form-group">
           EMAIL <input
              type="email"
              className="form-control form-control-lg"
          
              name="email"
              value={email}
            
            />
          </div>
          <div className="form-group">
           PHONE NUMBER <input
              type="text"
              className="form-control form-control-lg"
           
              name="phone"
              value={phone}
           
            />
          </div>
          <div className="form-group">
           WEBSITE <input
              type="text"
              className="form-control form-control-lg"
           
              name="website"
              value={website}
           
            />
          </div>
          <Link to='/'>
          <button className="btn btn-warning btn-block">Back</button></Link>
          
        </form>
      </div>
    </div>
  );
};

export default View;
