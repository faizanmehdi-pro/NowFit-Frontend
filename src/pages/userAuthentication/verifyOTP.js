import React from 'react'
import VerifyOTPForm from '../../components/userAuthentication/verifyOTPForm'

const VerifyOTP = ({changePasswordEmail, setUserID}) => {
  return (
    <VerifyOTPForm changePasswordEmail={changePasswordEmail} setUserID={setUserID}/>
  )
}

export default VerifyOTP
