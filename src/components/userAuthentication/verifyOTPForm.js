import React, { useState } from 'react';
import {
  AuthPageContainer,
  AuthForm,
  AuthFormButton,
  AuthFormOTPTitle,
  AuthFormOTPHeading,
  AuthFormVerifyOTP,
  AuthFormAlternativeOption,
  AuthFormAlternativeButton,
} from './userAuthenticationFormStyle';
import VerificationInput from 'react-verification-input';
import { toast } from 'react-toastify';
import { forgetPassword } from '../../api/auth/forgetPassword';
import { verifyOTP } from '../../api/auth/verifyOTP';
import { useNavigate } from 'react-router-dom';

const VerifyOTPForm = ({changePasswordEmail, setUserID}) => {
  const navigate = useNavigate();
  const [otpValue, setOtpValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (value) => {
    setOtpValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here, for example, checking if OTP length is 6
    if (otpValue.length !== 6) {
      setError('Please enter a valid OTP (6 digits)');
    } else {
      // Proceed with the validation logic or API call
      // Clear error message if validation passes
      setError('');
      // Perform further actions like sending OTP for validation
    }
    const otpData = {
      email: changePasswordEmail,
      code: otpValue
    }
    verifyOTP(otpData)
      .then((resp) => {
        console.log("first", resp?.user_id)
        setUserID(resp?.user_id);
        navigate("/resetPassword")
      })
      .catch((err) => {
        toast.error("Verification code is not valid or expired");
      });
  };
  
  const getCode = async () => {
    console.log("first", changePasswordEmail)
    try {
      let result = await forgetPassword(changePasswordEmail);
      if (result.message === "Mail sent successfully") {
        toast.success("Code has been resent successfully");
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <AuthPageContainer>
      <AuthFormOTPTitle>Please enter the One-Time Password to verify</AuthFormOTPTitle>
      <AuthFormOTPHeading>A One-Time Password has been sent to Email</AuthFormOTPHeading>
      <AuthForm onSubmit={handleSubmit}>
        <AuthFormVerifyOTP>
          <VerificationInput
            placeholder=""
            length={6}
            value={otpValue}
            onChange={handleChange}
            classNames={{
              container: 'container',
              character: 'character',
              characterInactive: 'character--inactive',
              characterSelected: 'character--selected',
            }}
            containerProps={{
              id: 'input-container',
            }}
          />
        </AuthFormVerifyOTP>
        {error && <div style={{ color: 'red', textAlign: 'center'}}>{error}</div>}
        <AuthFormButton type="submit" onClick={handleSubmit}>Validate</AuthFormButton>
        <AuthFormAlternativeOption>
          Didn’t receive OTP?{' '}
          <AuthFormAlternativeButton onClick={getCode}>Resend OTP</AuthFormAlternativeButton>
        </AuthFormAlternativeOption>
      </AuthForm>
    </AuthPageContainer>
  );
};

export default VerifyOTPForm;
