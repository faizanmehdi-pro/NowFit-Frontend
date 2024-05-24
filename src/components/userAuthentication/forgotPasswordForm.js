import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  AuthPageContainer,
  AuthForm,
  AuthFormTitle,
  AuthFormField,
  AuthFormFieldLabel,
  AuthFormFieldLabelText,
  AuthFormFieldLabelSign,
  AuthFormFieldInput,
  AuthFormButton,
  NextIcon,
  AuthFormError,
} from './userAuthenticationFormStyle';
import { forgetPassword } from '../../api/auth/forgetPassword';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordForm = ({setChangePasswordEmail}) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
    }),
    onSubmit: (values) => {
    forgetPassword(values.email)
    .then((resp) => {
      console.log(resp)
      if (resp.message === "Mail sent successfully") {
        toast.success("Mail sent successfully");
        setChangePasswordEmail(values.email);
        navigate('/verifyOTP');
    }
    })
    .catch((err) => {
      toast.error("User not found.");
    });
  },
  });

  return (
    <AuthPageContainer>
      <AuthFormTitle>Forgot Password</AuthFormTitle>
      <AuthForm>
        <AuthFormField>
          <AuthFormFieldLabel>
            <AuthFormFieldLabelText>Email</AuthFormFieldLabelText>
            <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
          </AuthFormFieldLabel>
          <AuthFormFieldInput
            type="text"
            placeholder='Enter Email'
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <AuthFormError>{formik.errors.email}</AuthFormError>
          ) : null}
        </AuthFormField>
        <AuthFormButton type="submit" onClick={formik.handleSubmit}>Forgot Password <NextIcon /></AuthFormButton>
      </AuthForm>
    </AuthPageContainer>
  );
};

export default ForgotPasswordForm;