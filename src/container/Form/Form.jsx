import React, { useState } from "react";
import NavBar from "../../Components/Home/Navs/Nav";
import "./Form.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { RULES } from "../../utils/RULES";
import ErrorMessage from "../Helpers/ErrorMessage";
import Spinner from "../Loaders/Spinner";
import { DOCUMENTAPI } from "../Constants/ApiConstants";
import { HOMEPAGE } from "../Constants/RoutesConstants";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch,
  } = useForm();

  function useDocument(data) {
    console.log(data);
    return useQuery(
      "submitData",
      async () => {
        return await axios.post(
          DOCUMENTAPI,
          { ...data },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      },
      {
        enabled: false,
        onSuccess: () => {
          navigate(HOMEPAGE);
        },
        onError: (err) => {
          if (err.response?.data) {
            setError("SubmitError", {
              type: "custom",
              message: err.response?.data?.error,
            });
          }
        },
        retry: 0,
      }
    );
  }

  const { refetch, isLoading } = useDocument({
    name: watch("name"),
    age: watch("age"),
    address: watch("address"),
    contactNumber: watch("contactNumber"),
    email: watch("email"),
    passportNo: watch("passportNo"),
    levelStuy: watch("levelStudy"),
    desiredCountry: watch("desiredCountry"),
    desiredCourse: watch("desiredCourse"),
    courseReq: watch("courseReq"),
  });

  const onSubmit = async () => {
    await refetch();
  };

  const [course, setCourse] = useState();
  const courses = [
    {
      value: "IELTS",
      label: "IELTS",
    },
    {
      value: "PTE",
      label: "PTE",
    },
  ];

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  return (
    <div className="form-main">
      <div className="navform">
        <NavBar />
      </div>
      <div className="form-container">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 3, width: "70%" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="fields">
            <h1 className="enter">
                Please enter your details to book an appointment
            </h1>
            <TextField
              required
              id="outlined-required"
              label="Full Name"
              {...register("name", {
                onChange: () => clearErrors("SubmitError"),
              })}
            />
            <TextField
              required
              id="outlined-required"
              label="Age"
              type="number"
              {...register("age", {
                onChange: () => clearErrors("SubmitError"),
              })}
            />
            <TextField
              required
              id="outlined-required"
              label="Mobile Number"
              error={errors?.contactNumber}
              helperText={
                errors?.contactNumber ? "10 digit mobile required" : ""
              }
              {...register("contactNumber", {
                ...RULES.contactNumber,
                onChange: () => clearErrors("SubmitError"),
              })}
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              error={errors?.email}
              helperText={errors?.email ? "Invalid Email" : ""}
              {...register("email", {
                ...RULES.email,
                onChange: () => clearErrors("SubmitError"),
              })}
            />
            <TextField
              required
              id="outlined-required"
              label="Address"
              {...register("address", {
                onChange: () => clearErrors("SubmitError"),
              })}
            />
            <TextField
              id="outlined-required"
              label="Passport No"
              {...register("passportNo", {
                onChange: () => clearErrors("SubmitError"),
              })}
            />
            <TextField
              id="outlined-required"
              label="Level of Study"
              {...register("levelStudy", {
                onChange: () => clearErrors("SubmitError"),
              })}
            />
            <TextField
              id="outlined-required"
              label="Desired Country"
              {...register("desiredCountry", {
                onChange: () => clearErrors("SubmitError"),
              })}
            />
            <TextField
              id="outlined-required"
              label="Desired Course"
              {...register("desiredCourse", {
                onChange: () => clearErrors("SubmitError"),
              })}
            />
            <TextField
              id="outlined-select-currency"
              select
              label="IELTS/PTE"
              value={course}
              defaultValue=""
              onChange={handleCourseChange}
              {...register("courseReq", {
                onChange: () => clearErrors("SubmitError"),
              })}
            >
              {courses.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div className="send-button">
              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                {isLoading ? <Spinner /> : "Send"}
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Form;
