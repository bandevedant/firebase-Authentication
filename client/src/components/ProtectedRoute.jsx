import React from 'react'
import { useUserAuthContext } from '../context/UserAuthContext'
import { Navigate } from 'react-router-dom'
export const ProtectedRoute = ({children}) => {

    const {user}=useUserAuthContext();
    if(!user){
        return <Navigate to="/"/>
    }
  return (
    children
  )
}
