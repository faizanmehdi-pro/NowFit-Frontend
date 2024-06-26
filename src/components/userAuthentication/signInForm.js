import React, { useState } from 'react';
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
  AuthFormPasswordField,
  AuthFormPasswordFieldInput,
  PasswordShowIcon,
  AuthFormButton,
  NextIcon,
  AuthFormError,
  AuthFormPasswordFieldLabel,
  AuthFormForgetPassword,
  PasswordHideIcon,
} from './userAuthenticationFormStyle';
import { toast } from 'react-toastify';
import { login } from '../../api/auth/login';
import { useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      // email: Yup.string().email('Invalid email address').required('Email is required'),
      email: Yup.string().required('Client ID is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      login(values)
      .then((resp) => {
        toast.success("User Login Successfully");
        navigate("/dashboard");
        localStorage.setItem("user_id", resp.user_id);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Client ID or Password is Incorrect");
      });
    },
  });

  return (
    <AuthPageContainer>
      <AuthFormTitle>Sign in to your account</AuthFormTitle>
      <AuthForm>
        <AuthFormField>
          <AuthFormFieldLabel>
            <AuthFormFieldLabelText>Client ID</AuthFormFieldLabelText>
            <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
          </AuthFormFieldLabel>
          <AuthFormFieldInput
            type="text"
            placeholder='Enter Client ID'
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <AuthFormError>{formik.errors.email}</AuthFormError>
          ) : null}
        </AuthFormField>
        <AuthFormField>
          <AuthFormPasswordFieldLabel>
            <AuthFormFieldLabel>
              <AuthFormFieldLabelText>Password</AuthFormFieldLabelText>
              <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
            </AuthFormFieldLabel>
            <AuthFormForgetPassword to="/forgotPassword">Forgot?</AuthFormForgetPassword>
          </AuthFormPasswordFieldLabel>
          <AuthFormPasswordField>
            <AuthFormPasswordFieldInput
              type={showPassword ? 'text' : 'password'}
              placeholder='************'
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {showPassword ? (
              <PasswordHideIcon onClick={() => setShowPassword(false)} />
            ) : (
              <PasswordShowIcon onClick={() => setShowPassword(true)} />
            )}
          </AuthFormPasswordField>
          {formik.touched.password && formik.errors.password ? (
            <AuthFormError>{formik.errors.password}</AuthFormError>
          ) : null}
        </AuthFormField>
        <AuthFormButton type="submit" onClick={formik.handleSubmit}>Sign In <NextIcon /></AuthFormButton>
      </AuthForm>
    </AuthPageContainer>
  );
};

export default SignInForm;