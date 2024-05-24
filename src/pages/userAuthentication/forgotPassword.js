import React from 'react'
import ForgotPasswordForm from '../../components/userAuthentication/forgotPasswordForm'

const ForgotPassword = ({setChangePasswordEmail}) => {
  return (
    <ForgotPasswordForm setChangePasswordEmail={setChangePasswordEmail}/>
  )
}

export default ForgotPassword
