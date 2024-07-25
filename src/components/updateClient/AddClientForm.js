import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {
  ClientStripeFormButton,
  ClientStripeFormButtonContainer,
  ClientStripeFormCancelButton,
  ClientStripeFormCombinedField,
  ClientStripeFormContainer,
  ClientStripeFormError,
  ClientStripeFormField,
  ClientStripeFormFieldInput,
  ClientStripeFormFieldLabelText,
  ClientStripeFormTitle,
} from './clientSettingStyles';
import { addClient } from '../../api/addClient';

const AddClientForm = ({ setUpdateClientData, setClientLoading, setAnalyticsLoading, setAddClientData }) => {
  const [addClientLoading, setAddClientLoading] = useState(false);
  const userID = localStorage.getItem("user_id");

  const formik = useFormik({
    initialValues: {
      user_id: userID,
      email: '',
      phone: '',
      first_name: '',
      last_name: '',
      date_of_birth: '',
      address: '',
      city: '',
      state: '',
      country: '',
      postal_code: ''
    },

    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      first_name: Yup.string().required('First Name is required'),
      last_name: Yup.string().required('Last Name is required'),
      date_of_birth: Yup.date().required('Date of Birth is required'),
      address: Yup.string().required('Address is required'),
      city: Yup.string().required('City is required'),
      state: Yup.string().required('State is required'),
      country: Yup.string().required('Country is required'),
      postal_code: Yup.string().required('Postal Code is required'),
    }),

    onSubmit: (values) => {
      setAddClientLoading(true);
    
      addClient(values)
        .then((resp) => {
            toast.success('User added Successfully');
            setUpdateClientData(false);
            setClientLoading(true);
            setAnalyticsLoading(true);
            setAddClientData(false);
            setAddClientLoading(false);
        })
        .catch((err) => {
          toast.error('Please Try Again');
          setAddClientLoading(false);
        });
    }
  });

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
            type="email"
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
          <ClientStripeFormFieldLabelText>Phone *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter Phone Number"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <ClientStripeFormError>{formik.errors.phone}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
      </ClientStripeFormCombinedField>
      <ClientStripeFormCombinedField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>Date of Birth *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="date"
            placeholder="Enter Date of Birth"
            name="date_of_birth"
            value={formik.values.date_of_birth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.date_of_birth && formik.errors.date_of_birth ? (
            <ClientStripeFormError>{formik.errors.date_of_birth}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>Address *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter Address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.address && formik.errors.address ? (
            <ClientStripeFormError>{formik.errors.address}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
      </ClientStripeFormCombinedField>
      <ClientStripeFormCombinedField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>City *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter City"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.city && formik.errors.city ? (
            <ClientStripeFormError>{formik.errors.city}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>State *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter State"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.state && formik.errors.state ? (
            <ClientStripeFormError>{formik.errors.state}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
      </ClientStripeFormCombinedField>
      <ClientStripeFormCombinedField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>Country *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter Country"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.country && formik.errors.country ? (
            <ClientStripeFormError>{formik.errors.country}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
        <ClientStripeFormField>
          <ClientStripeFormFieldLabelText>Postal Code *</ClientStripeFormFieldLabelText>
          <ClientStripeFormFieldInput
            type="text"
            placeholder="Enter Postal Code"
            name="postal_code"
            value={formik.values.postal_code}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.postal_code && formik.errors.postal_code ? (
            <ClientStripeFormError>{formik.errors.postal_code}</ClientStripeFormError>
          ) : null}
        </ClientStripeFormField>
      </ClientStripeFormCombinedField>
      <ClientStripeFormButtonContainer>
        <ClientStripeFormCancelButton type="button" onClick={() => { setClientLoading(true); setUpdateClientData(false); setAddClientData(false); }}>Cancel</ClientStripeFormCancelButton>
        <ClientStripeFormButton type="submit" onClick={formik.handleSubmit} disabled={addClientLoading}>{addClientLoading ? 'Loading...' : 'Save'}</ClientStripeFormButton>
      </ClientStripeFormButtonContainer>
    </ClientStripeFormContainer>
  );
};

export default AddClientForm;
