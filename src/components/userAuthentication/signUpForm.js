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
  AuthFormAlternativeOption,
  AuthFormAlternativeButton,
  AuthFormDividerContainer,
  AuthFormDivider,
  GoogleIcon,
  AuthFormError,
  PasswordHideIcon,
} from './userAuthenticationFormStyle';
import { toast } from 'react-toastify';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);  
      toast.success('Success!', {
        className: 'success-toast',
      });
      toast.error('Failure!', {
        className: 'failure-toast',
      });
    },
  });

  return (
    <AuthPageContainer>
      <AuthFormTitle>Create your free account</AuthFormTitle>
      <AuthForm>
        <AuthFormField>
          <AuthFormFieldLabel>
            <AuthFormFieldLabelText>First Name</AuthFormFieldLabelText>
            <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
          </AuthFormFieldLabel>
          <AuthFormFieldInput
            type="text"
            placeholder='E.g., Mark'
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <AuthFormError>{formik.errors.firstName}</AuthFormError>
          ) : null}
        </AuthFormField>
        <AuthFormField>
          <AuthFormFieldLabel>
            <AuthFormFieldLabelText>Last Name</AuthFormFieldLabelText>
            <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
          </AuthFormFieldLabel>
          <AuthFormFieldInput
            type="text"
            placeholder='E.g., Rossi'
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <AuthFormError>{formik.errors.lastName}</AuthFormError>
          ) : null}
        </AuthFormField>
        <AuthFormField>
          <AuthFormFieldLabel>
            <AuthFormFieldLabelText>Email</AuthFormFieldLabelText>
            <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
          </AuthFormFieldLabel>
          <AuthFormFieldInput
            type="text"
            placeholder='markrossi@company.com'
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
          <AuthFormFieldLabel>
            <AuthFormFieldLabelText>Password</AuthFormFieldLabelText>
            <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
          </AuthFormFieldLabel>
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
        <AuthFormButton type="submit" onClick={formik.handleSubmit}>Sign Up <NextIcon /></AuthFormButton>
        <AuthFormAlternativeOption>
          Already have an account? <AuthFormAlternativeButton>Sign In</AuthFormAlternativeButton>
        </AuthFormAlternativeOption>
        <AuthFormDividerContainer>
          <AuthFormDivider /> or <AuthFormDivider />
        </AuthFormDividerContainer>
        <AuthFormButton><GoogleIcon /> Sign up with Google</AuthFormButton>
      </AuthForm>
    </AuthPageContainer>
  );
};

export default SignUpForm;