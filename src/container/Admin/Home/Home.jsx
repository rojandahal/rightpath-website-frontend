import React from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import SideBar from "../SideBar/SideBar";
import NavBar from "../NavBar/NavBar";
import Tables from "../Table/Table";
import './Home.css'
import { ADMINLOGIN } from "../../Constants/RoutesConstants";

const AdminPageHome = () => {
  const navigate = useNavigate();
  const logoutButtonHandler = () => {
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          navigate(ADMINLOGIN);
  };
  return (
    <div className="home">
            <SideBar logoutButtonHandler={logoutButtonHandler}/>
            <div className="homeContainer">
                <NavBar />
                <div className="listContainer">
                    <div className="listTitle">Latest Student Requests</div>
                    <Tables />
                </div>
            </div>
        </div>
  );
};

export default AdminPageHome;