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
  NextIcon,
  AuthFormError,
  PasswordHideIcon,
} from './userAuthenticationFormStyle';
import { toast } from 'react-toastify';
import { resetPassword } from '../../api/auth/resetPassword';

const ResetPasswordForm = ({userID}) => {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: {
      newPassword: '',
      confirmNewPassword: '',
    },
    validationSchema: Yup.object({
      newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New Password is required'),
      confirmNewPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .min(6, 'Password must be at least 6 characters')
        .required('Confirm New Password is required'),
    }),
    onSubmit: (values) => {
      const resetPasswordData = {
        userId: userID,
        newPassword: values.newPassword,
        confirmNewPassword: values.confirmNewPassword
      }
      resetPassword(resetPasswordData)
      .then((resp) => {
        toast.success("Password Reset Successfully");
      })
      .catch((err) => {
        console.log(err);
        toast.error(err);
      });
    },
  });

  return (
    <AuthPageContainer>
      <AuthFormTitle>Reset your password</AuthFormTitle>
      <AuthForm>
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
        <AuthFormButton type="submit" onClick={formik.handleSubmit}>Reset Password <NextIcon /></AuthFormButton>
      </AuthForm>
    </AuthPageContainer>
  );
};

export default ResetPasswordForm;
