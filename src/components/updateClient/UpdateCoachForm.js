import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { toast } from 'react-toastify';
import {
  ClientStripeFormButton,
  ClientStripeFormButtonContainer,
  ClientStripeFormCancelButton,
  ClientStripeFormCombinedField,
  ClientStripeFormContainer,
  ClientStripeFormError,
  ClientStripeFormField,
  ClientStripeFormFieldDifferent,
  ClientStripeFormFieldInput,
  ClientStripeFormFieldLabelText,
  ClientStripeFormFieldTextArea,
  ClientStripeFormTitle,
  DescriptionFormFieldTextArea
} from './clientSettingStyles';
import { addCoach } from '../../api/addCoach';

const UpdateCoachForm = ({setClientLoading, setAnalyticsLoading, setAddClientData, isAdmin, locations, getClientData, setUpdateClientData }) => {
  const isCoach = isAdmin === 'false' ? false : true;
  const [addClientLoading, setAddClientLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      first_name: getClientData?.firstName,
      last_name: getClientData?.lastName,
      email: getClientData?.email,
      phone: getClientData?.phone,
      commissionPercentage: '',
      password: '',
      userType: getClientData?.roles?.type,
      userRole: getClientData?.roles?.role,
      multiSelectField: []
    },

    validationSchema: Yup.object({
      first_name: Yup.string().required('First Name is required'),
      last_name: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      // businessName: Yup.string().required('Business Name is required'),
      commissionPercentage: Yup.string().required('Commission Rate is required'),
      // description: Yup.string().required('Description is required'),
      password: Yup.string().required('Password is required'),
      userType: Yup.string().required('User Type is required'),
      userRole: Yup.string().required('User Role is required'),
      multiSelectField: Yup.array().min(1, 'At least one option is required')
    }),

    onSubmit: (values) => {
      console.log("first", values);
      setAddClientLoading(true);
    }
  });

  const userTypesOptions = [
    { value: 'agency', label: 'Agency' },
    { value: 'account', label: 'Account' }
  ];
  const userRolesOptions = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' }
  ];

  const multiSelectOptions = locations.map(location => ({
    value: location.id,
    label: location.name
}));

  return (
    <ClientStripeFormContainer onSubmit={formik.handleSubmit}>
      <ClientStripeFormTitle>General Details</ClientStripeFormTitle>
      <ClientStripeFormCombinedField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>First Name *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter First Name"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.first_name && formik.errors.first_name ? (
            <ClientStripeFormError>{formik.errors.first_name}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>Last Name *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter Last Name"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.last_name && formik.errors.last_name ? (
            <ClientStripeFormError>{formik.errors.last_name}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
      </ClientStripeFormCombinedField>
      <ClientStripeFormCombinedField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>Email *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <ClientStripeFormError>{formik.errors.email}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>Password *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="********"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <ClientStripeFormError>{formik.errors.password}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
      </ClientStripeFormCombinedField>
      <ClientStripeFormCombinedField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>Commission Percentage (%) *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="number"
            placeholder="20"
            name="commissionPercentage"
            value={formik.values.commissionPercentage}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.commissionPercentage && formik.errors.commissionPercentage ? (
            <ClientStripeFormError>{formik.errors.commissionPercentage}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>Phone *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            pattern="\d*"
            inputMode="numeric"
            onKeyPress={(event) => {
              const charCode = event.charCode;
              if (charCode !== 43 && (charCode < 48 || charCode > 57)) {
                event.preventDefault();
              }
            }}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <ClientStripeFormError>{formik.errors.phone}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
      </ClientStripeFormCombinedField>
      <ClientStripeFormCombinedField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>User Types *</ClientStripeFormFieldLabelText>
          <Select
            options={userTypesOptions}
            name="userType"
            value={userTypesOptions.find(option => option.value === formik.values.userType)}
            onChange={(selectedOption) => formik.setFieldValue('userType', selectedOption.value)}
            onBlur={() => formik.setFieldTouched('userType', true)}
          />
          {formik.touched.userType && formik.errors.userType ? (
            <ClientStripeFormError>{formik.errors.userType}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>User Roles *</ClientStripeFormFieldLabelText>
          <Select
            options={userRolesOptions}
            name="userRole"
            value={userRolesOptions.find(option => option.value === formik.values.userRole)}
            onChange={(selectedOption) => formik.setFieldValue('userRole', selectedOption.value)}
            onBlur={() => formik.setFieldTouched('userRole', true)}
          />
          {formik.touched.userRole && formik.errors.userRole ? (
            <ClientStripeFormError>{formik.errors.userRole}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
      </ClientStripeFormCombinedField>
        <ClientStripeFormField>
        <ClientStripeFormFieldLabelText>Add Sub-Accounts *</ClientStripeFormFieldLabelText>
        <Select
          isMulti
          options={multiSelectOptions}
          name="multiSelectField"
          value={multiSelectOptions.filter(option => formik.values.multiSelectField.includes(option.value))}
          onChange={(selectedOptions) => formik.setFieldValue('multiSelectField', selectedOptions.map(option => option.value))}
          onBlur={() => formik.setFieldTouched('multiSelectField', true)}
        />
        {formik.touched.multiSelectField && formik.errors.multiSelectField ? (
          <ClientStripeFormError>{formik.errors.multiSelectField}</ClientStripeFormError>
        ) : null}
        </ClientStripeFormField>
      <ClientStripeFormButtonContainer>
      <ClientStripeFormCancelButton type="button" onClick={() => { setClientLoading(true); setUpdateClientData(false); }}>Cancel</ClientStripeFormCancelButton>
      <ClientStripeFormButton type="button" onClick={() => { setClientLoading(true); setUpdateClientData(false); }}>Save</ClientStripeFormButton>
        {/* <ClientStripeFormButton type="submit" onClick={formik.handleSubmit} disabled={addClientLoading}>{addClientLoading ? 'Loading...' : 'Save'}</ClientStripeFormButton> */}
      </ClientStripeFormButtonContainer>
    </ClientStripeFormContainer>
  );
};

export default UpdateCoachForm;
