import React from 'react'
import ResetPasswordForm from '../../components/userAuthentication/resetPasswordForm'

const ResetPassword = ({userID}) => {
  return (
    <ResetPasswordForm userID={userID}/>
  )
}

export default ResetPassword
