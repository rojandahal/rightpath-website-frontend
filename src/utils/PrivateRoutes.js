import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import { decryptObjData } from './EncryptDecrypt'

const PrivateRoute = ({ children }) => {
  let userData = decryptObjData(localStorage.getItem('user'))
  const isAuthenticated = userData ? true : false
  return isAuthenticated ? children : <Navigate to='/rightpath/admin/login' />
}

export default PrivateRoute
