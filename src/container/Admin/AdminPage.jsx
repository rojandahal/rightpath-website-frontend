import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { RULES } from "../../utils/RULES";
import ErrorMessage from "../Helpers/ErrorMessage";
import Spinner from "../Loaders/Spinner";
import "./AdminPage.css"
import { Cookies } from 'react-cookie'
import { encryptData } from "../../utils/EncryptDecrypt";
axios.defaults.withCredentials = true

const AdminPage = () => {
    const navigate = useNavigate();
    const cookies = new Cookies()
    const {register,handleSubmit, formState: {errors},setError, clearErrors, watch} = useForm()

  function useUser(data) {
    return useQuery('fetchUser', async () => {
      return await axios.post("https://rightpathapi.herokuapp.com/api/v1/auth/login" , {...data},{
            headers: {
                "Content-Type": "application/json"
            }
        },)
    }, { enabled: false, 
      onSuccess: res => {
        if(res?.data?.token) {
          if(res?.data?.user?.role === 'admin'){
            cookies.set('token', res?.data?.token)
            cookies.set('user', encryptData(res?.data?.user))
            navigate('/rightpath/admin/homepage')
          }
        }
      },
      onError: (err) => {
        if(err.response?.data){
          setError('SubmitError', {type: 'custom', message: err.response?.data?.error})
        }
      }, 
      retry: 0 });
  }

  const {refetch, isLoading} =  useUser({email:watch('email') , password: watch('password')})
  
    const onSubmit= async ()=>{
        await refetch()
    };
  return (
    <div className="all-contain">
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label className={`${errors?.email && 'warrning'}`}>Email address *</label>
              <input
                type="text"
                className={`form-control mt-1 ${errors?.email && 'warrning'}`}
                placeholder="Enter email"
                {...register('email', {...RULES.email, onChange: () => clearErrors('SubmitError')})}
              />
            </div>
            <div className="form-group mt-3">
              <label className={`${errors?.password && 'warrning'}`}>Password *</label>
              <input
                type="password"
                className={`form-control mt-1 ${errors?.password && 'warrning'}`}
                placeholder="Enter password"
                {...register('password',  {...RULES.password, onChange: () => clearErrors('SubmitError')})}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                {isLoading ? <Spinner /> : 'Submit'}
              </button>
              {errors?.SubmitError && <ErrorMessage errors={errors} type="SubmitError" />} 
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
