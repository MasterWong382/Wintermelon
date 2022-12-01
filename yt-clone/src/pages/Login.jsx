import "../styles/Login.css";
import React from "react";
import axios from 'axios';
import { useState } from "react";

const Login = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: data.username,
      password: data.password
    };
    console.log(userData);
    axios.post("http://localhost:4000/LoginDetails",userData).then((response)=> {
      if (response.data == true){
        console.log('logged in');
      }
      else{
        alert('fail');
      }
      console.log(response.data);});
  }
  
  return ( 
    <div className="App">
      <form onSubmit = {handleSubmit}> 
      <div className="App-Inner">
        <img
          className="Gay"
          src="https://d1hjkbq40fs2x4.cloudfront.net/2016-07-16/files/cat-sample_1313.jpg"
          alt="Not found"
        ></img>
        <h5>
          Username: &nbsp;
          <input
            className="search-box"
            type="search"
            name="username"
            placeholder="Enter Username..."
            value = {data.username}
            onChange = {handleChange}
          />
        </h5>
        <h5>
          Password: &nbsp;
          <input
            type="password"
            name="password"
            className="search-box"
            placeholder="Enter Password..."
            value = {data.password}
            onChange = {handleChange}
          />
        </h5>
        <button type="submit" class="w3-container w3-light-grey w3-justify">Log In</button>
      </div>
      </form>
    </div>
  );
};

export default Login;
