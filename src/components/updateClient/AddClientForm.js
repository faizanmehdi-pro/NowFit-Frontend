import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ClientStripeFormButton, ClientStripeFormButtonContainer, ClientStripeFormCancelButton, ClientStripeFormCombinedField, ClientStripeFormContainer, ClientStripeFormError, ClientStripeFormField, ClientStripeFormFieldDifferent, ClientStripeFormFieldInput, ClientStripeFormFieldLabelText, ClientStripeFormFieldTextArea, ClientStripeFormTitle, DescriptionFormFieldTextArea } from './clientSettingStyles';
import { toast } from 'react-toastify';
import { updateClient } from '../../api/auth/updateClient';
import { addUser } from '../../api/addUser';

const AddClientForm = ({setUpdateClientData, setClientLoading, setAnalyticsLoading, setAddClientData, isAdmin}) => {
  const isCoach = isAdmin === "true" ? false : true;
  const [addClientLoading, setAddClientLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      businessName: "",
      commissionPercentage: "",
      description: "",
      password: "",
      is_coach: isCoach
    },
    
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().required('Phone is required'),
      businessName: Yup.string().required('Business Name is required'),
      commissionPercentage: Yup.string().required('Commission Rate is required'),
      description: Yup.string().required('Description is required'),
      password: Yup.string().required('Password is required'),
    }),

    onSubmit: (values) => {
      setAddClientLoading(true); 
      addUser(values)
      .then((resp) => {
        toast.success("User added Successfully");
        setUpdateClientData(false);
        setClientLoading(true)
        setAnalyticsLoading(true)
        setAddClientData(false)
        setAddClientLoading(false)
      })
      .catch((err) => {
        toast.error("Please Try Again");
      });
    },
  });


  return (
      <ClientStripeFormContainer>
        <ClientStripeFormTitle>General Details</ClientStripeFormTitle>
        <ClientStripeFormCombinedField>
          <ClientStripeFormField>
            <ClientStripeFormFieldLabelText>Name *</ClientStripeFormFieldLabelText>
            <ClientStripeFormFieldInput
              type="text"
              placeholder='Enter Name'
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name ? (
              <ClientStripeFormError>{formik.errors.name}</ClientStripeFormError>
            ) : null}
          </ClientStripeFormField>
          <ClientStripeFormField>
            <ClientStripeFormFieldLabelText>Email *</ClientStripeFormFieldLabelText>
            <ClientStripeFormFieldInput
              type="text"
              placeholder='Enter Email'
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <ClientStripeFormError>{formik.errors.email}</ClientStripeFormError>
            ) : null}
          </ClientStripeFormField>
        </ClientStripeFormCombinedField>
        <ClientStripeFormCombinedField>
          <ClientStripeFormField>
            <ClientStripeFormFieldLabelText>Phone *</ClientStripeFormFieldLabelText>
            <ClientStripeFormFieldInput
              type="number"
              placeholder='Enter Phone Number'
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <ClientStripeFormError>{formik.errors.phone}</ClientStripeFormError>
            ) : null}
          </ClientStripeFormField>
          <ClientStripeFormField>
            <ClientStripeFormFieldLabelText>Business Name *</ClientStripeFormFieldLabelText>
            <ClientStripeFormFieldInput
              type="text"
              placeholder='Enter Business Name'
              name="businessName"
              value={formik.values.businessName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.businessName && formik.errors.businessName ? (
              <ClientStripeFormError>{formik.errors.businessName}</ClientStripeFormError>
            ) : null}
          </ClientStripeFormField>
        </ClientStripeFormCombinedField>
        <ClientStripeFormCombinedField>
          <ClientStripeFormField>
            <ClientStripeFormFieldLabelText>Commission Percentage (%) *</ClientStripeFormFieldLabelText>
            <ClientStripeFormFieldInput
              type="number"
              placeholder='20'
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
            <ClientStripeFormFieldLabelText>Password *</ClientStripeFormFieldLabelText>
            <ClientStripeFormFieldInput
              type="text"
              placeholder='********'
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
          <ClientStripeFormFieldDifferent>
            <ClientStripeFormFieldLabelText>Description *</ClientStripeFormFieldLabelText>
            <DescriptionFormFieldTextArea
              type="text"
              placeholder='Enter Description'
              name="description"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.description && formik.errors.description ? (
              <ClientStripeFormError>{formik.errors.description}</ClientStripeFormError>
            ) : null}
          </ClientStripeFormFieldDifferent>
        <ClientStripeFormButtonContainer>
          <ClientStripeFormCancelButton type="button" onClick={() => { setClientLoading(true); setUpdateClientData(false); setAddClientData(false); }}>Cancel</ClientStripeFormCancelButton>
          <ClientStripeFormButton type="submit" onClick={formik.handleSubmit} disabled={addClientLoading}>{addClientLoading ? "Loading..." : "Save" }</ClientStripeFormButton>
        </ClientStripeFormButtonContainer>
      </ClientStripeFormContainer>
  );
};

export default AddClientForm;