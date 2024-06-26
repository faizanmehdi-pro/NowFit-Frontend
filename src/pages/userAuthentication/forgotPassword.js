import React from 'react'
import ForgotPasswordForm from '../../components/userAuthentication/forgotPasswordForm'

const ForgotPassword = ({setOtpManualCode, setChangePasswordEmail}) => {
  return (
    <ForgotPasswordForm setOtpManualCode={setOtpManualCode} setChangePasswordEmail={setChangePasswordEmail}/>
  )
}

export default ForgotPassword
