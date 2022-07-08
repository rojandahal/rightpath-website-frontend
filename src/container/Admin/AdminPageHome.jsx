import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AdminPageHome = () => {
  const navigate = useNavigate();
  const buttonClick = async () => {
    axios
      .get("https://rightpathapi.herokuapp.com/api/v1/auth/logout")
      .then((response) => {
        console.log(response);
        navigate("/rightpath/admin");
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
