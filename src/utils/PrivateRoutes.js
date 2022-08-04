import React from 'react'
import { Navigate } from 'react-router-dom'
import { ADMINLOGIN } from '../container/Constants/RoutesConstants'
import { decryptObjData } from './EncryptDecrypt'

const PrivateRoute = ({ children }) => {
  let userData = decryptObjData(localStorage.getItem('user'))
  const isAuthenticated = userData ? true : false
  return isAuthenticated ? children : <Navigate to={ADMINLOGIN} />
}

export default PrivateRoute
