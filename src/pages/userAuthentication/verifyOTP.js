import React from 'react'
import VerifyOTPForm from '../../components/userAuthentication/verifyOTPForm'

const VerifyOTP = ({otpManualCode, setOtpManualCode, changePasswordEmail, setUserID}) => {
  return (
    <VerifyOTPForm otpManualCode={otpManualCode} setOtpManualCode={setOtpManualCode} changePasswordEmail={changePasswordEmail} setUserID={setUserID}/>
  )
}

export default VerifyOTP
