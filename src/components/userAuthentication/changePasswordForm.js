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
  AuthFormPasswordField,
  AuthFormPasswordFieldInput,
  PasswordShowIcon,
  AuthFormButton,
  AuthFormError,
  PasswordHideIcon,
} from './userAuthenticationFormStyle';

const ChangePasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOldPassword, setShowOldPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      oldPassword: '',
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required('Old Password is required'),
      newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New Password is required'),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'New password must match')
        .min(6, 'Password must be at least 6 characters')
        .required('Confirm New Password is required'),
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    },
  });

  return (
    <AuthPageContainer>
      <AuthFormTitle>Change your password</AuthFormTitle>
      <AuthForm>
        <AuthFormField>
          <AuthFormFieldLabel>
            <AuthFormFieldLabelText>Old Password</AuthFormFieldLabelText>
            <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
          </AuthFormFieldLabel>
          <AuthFormPasswordField>
            <AuthFormPasswordFieldInput
              type={showOldPassword ? 'text' : 'password'}
              placeholder='************'
              name="oldPassword"
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {showOldPassword ? (
              <PasswordHideIcon onClick={() => setShowOldPassword(false)} />
            ) : (
              <PasswordShowIcon onClick={() => setShowOldPassword(true)} />
            )}
          </AuthFormPasswordField>
          {formik.touched.oldPassword && formik.errors.oldPassword ? (
            <AuthFormError>{formik.errors.oldPassword}</AuthFormError>
          ) : null}
        </AuthFormField>
        <AuthFormField>
          <AuthFormFieldLabel>
            <AuthFormFieldLabelText>New Password</AuthFormFieldLabelText>
            <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
          </AuthFormFieldLabel>
          <AuthFormPasswordField>
            <AuthFormPasswordFieldInput
              type={showPassword ? 'text' : 'password'}
              placeholder='************'
              name="newPassword"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {showPassword ? (
              <PasswordHideIcon onClick={() => setShowPassword(false)} />
            ) : (
              <PasswordShowIcon onClick={() => setShowPassword(true)} />
            )}
          </AuthFormPasswordField>
          {formik.touched.newPassword && formik.errors.newPassword ? (
            <AuthFormError>{formik.errors.newPassword}</AuthFormError>
          ) : null}
        </AuthFormField>
        <AuthFormField>
          <AuthFormFieldLabel>
            <AuthFormFieldLabelText>Confirm New Password</AuthFormFieldLabelText>
            <AuthFormFieldLabelSign>*</AuthFormFieldLabelSign>
          </AuthFormFieldLabel>
          <AuthFormPasswordField>
            <AuthFormPasswordFieldInput
              type={showPassword ? 'text' : 'password'}
              placeholder='************'
              name="confirmNewPassword"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {showPassword ? (
              <PasswordHideIcon onClick={() => setShowPassword(false)} />
            ) : (
              <PasswordShowIcon onClick={() => setShowPassword(true)} />
            )}
          </AuthFormPasswordField>
          {formik.touched.confirmNewPassword && formik.errors.confirmNewPassword ? (
            <AuthFormError>{formik.errors.confirmNewPassword}</AuthFormError>
          ) : null}
        </AuthFormField>
        <AuthFormButton type="submit" onClick={formik.handleSubmit}>Change Password</AuthFormButton>
      </AuthForm>
    </AuthPageContainer>
  );
};

export default ChangePasswordForm;
