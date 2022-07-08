import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./AdminPage.css"

const AdminPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    const onEmailHandler=(event)=>{
        setEmail(event.target.value);
        console.log(email);
    };
    const onPasswordHandler = (event) =>{
        setPassword(event.target.value);
        console.log(password);
    }


    const onSubmitHandler= async ()=>{
        const data = {
            email,
            password,
        };

        axios.post("https://rightpathapi.herokuapp.com/api/v1/auth/login" , data,{
            withCredentials: true,
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then ((response) => {
            console.log(response.data);
            navigate("/rightpath/admin/homepage");
        })
        .catch((error) =>{
            console.log(error.message);
        })
    };
  return (
    <div className="all-contain">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={onEmailHandler}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={onPasswordHandler}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button" className="btn btn-primary" onClick={onSubmitHandler}>
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
