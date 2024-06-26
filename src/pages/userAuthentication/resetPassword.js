import React from 'react'
import ResetPasswordForm from '../../components/userAuthentication/resetPasswordForm'

const ResetPassword = ({changePasswordEmail, userID}) => {
  return (
    <ResetPasswordForm changePasswordEmail={changePasswordEmail} userID={userID}/>
  )
}

export default ResetPassword
