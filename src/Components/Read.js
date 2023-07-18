import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers =  () => {
     axios.get("https://649c087004807571923757eb.mockapi.io/CRUD")
     .then((res)=>   setUsers(res.data))
     .catch(err => console.log(err))
  }

  const deleteUser = async id => {
    await axios.delete(`https://649c087004807571923757eb.mockapi.io/CRUD/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <Link to = '/create'><button className="btn btn-success">Add User</button></Link>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-primary mr-2" 
                  to={'/view/' + user.id}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={"/update/" + user.id}
                  >
                    Edit
                  </Link>

                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
