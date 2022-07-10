import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Cookies } from 'react-cookie'

const AdminPageHome = () => {
  const navigate = useNavigate();
  const cookies = new Cookies()
  const buttonClick = async () => {
    axios
      .get("https://rightpathapi.herokuapp.com/api/v1/auth/logout")
      .then((res) => {
        if(res?.data?.status ==='Succes'){
          cookies.remove('token')
          cookies.remove('user')
          navigate("/rightpath/admin");
        }
      });
  };
  return (
    <div>
      <button type="submit" onClick={buttonClick}>
        Logout
      </button>
      <h1>Logged in successful</h1>
    </div>
  );
};

export default AdminPageHome;