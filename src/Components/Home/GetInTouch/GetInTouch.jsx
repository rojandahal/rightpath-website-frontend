import React, { useState } from 'react'
import "./GetInTouch.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { FormProvider, useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import axios from "axios";
import { DOCUMENTAPI } from '../../../container/Constants/ApiConstants';
import Spinner from '../../../container/Loaders/Spinner';
import { RULES } from '../../../utils/RULES';
import { HOMEPAGE } from '../../../container/Constants/RoutesConstants';
import Input from './InputField';
import InputField from './InputField';
import { SelectInput } from './SelectInput';

const GetInTouch = () => {
    const navigate = useNavigate();
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    watch,
  } = methods;

  const [fields, setFields] = useState([
    {label: 'Name', id: 'name',},
    {label: 'Age', id: 'age'},
    {label: 'Contact Number', id: 'contactNumber', rule: true},
    {label: 'Email', id: 'email', rule: true},
    {label: 'Address', id: 'address'},
    {label: 'Passport Number', id: 'passportNo'},
    {label: 'Level of Study', id: 'los'},
    {label: 'Desired Country', id: 'desiredCountry'},
])

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

  const onSubmit = async (data) => {
    console.log(data)
    await refetch();
  };

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
    return (
        <div className="getintouch">
            <div className="title">
                <h4>Get In Touch</h4>
                <p>Feel free to drop us a line to contact us</p>
            </div>
            <div className="container">
                <div className="contact">
                    <div className="heading">
                        <h4>Feel Free To Contact</h4>
                        <p>Please Locate Us On:</p>
                    </div>
                    <div className="main">
                        <div className="location">
                            <i class="fa fa-home"></i>
                            <span className="info">Dillibazar-30, Kathmandu, Nepal.</span>
                        </div>
                        <div className="phone">
                            <i class="fa fa-phone"></i>
                                <span className="info"><a href="tel: +977-1-4423354">+977-1-4423354</a></span>
                        </div>
                        <div className="email">
                            <i class="fa fa-envelope"></i>
                            <span className="info"><a href="mailto: rightpatheducation@gmail.com">rightpatheducation@gmail.com</a></span>
                        </div>
                        <div className="website">
                            <i class="fa fa-globe"></i>
                            <span className="info"><a href="https://www.rightpath.edu.np/" target="_blank" rel="noopener noreferrer">www.rightpath.edu.np</a></span>
                        </div>
                    </div>
                </div>
                <div className="form-container">
                    <Box
                    component="form"
                    sx={{
                        "& .MuiTextField-root": { m: 3, width: "70%" },
                    }}
                    noValidate
                    className='box'
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <div className="input-fields">
                        <h1 className="heading">
                            Book An Appointment
                        </h1>
                        <FormProvider {...methods}>
                        {fields.map(field => {
                            return <InputField label={field?.label} errors={errors[`${field?.id}`]} className={field?.id} id={field?.id} />
                        })}
                        </FormProvider>
                        <SelectInput
                            placeholder="IELTS/PTE"
                            defaultValue={'Select Course'}
                            name="IELTS/PTE"
                            label="Course"
                            defaultOption="IELTS/PTE"
                            {...register('courseReq', {required: true})}
                            options={courses}
                        />
                        <Button type="submit" className="submitButton" variant="contained">
                            {isLoading ? <Spinner /> : "Send"}
                        </Button>
                    </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;