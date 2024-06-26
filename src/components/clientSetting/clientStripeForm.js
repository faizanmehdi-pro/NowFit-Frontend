import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ClientStripeFormButton, ClientStripeFormButtonContainer, ClientStripeFormCancelButton, ClientStripeFormCombinedField, ClientStripeFormContainer, ClientStripeFormError, ClientStripeFormField, ClientStripeFormFieldDifferent, ClientStripeFormFieldInput, ClientStripeFormFieldLabelText, ClientStripeFormFieldTextArea, ClientStripeFormTitle } from './clientSettingStyles';
import { stripe } from '../../api/stripe';

const ClientStripeForm = () => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [stripeLoading, setStripeLoading] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const userID = localStorage.getItem("user_id");
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      stripePK: '',
      stripeSK: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      stripePK: Yup.string().required('Stripe Publishable Key is required'),
      stripeSK: Yup.string().required('Stripe Secret Key is required'),
    }),
    onSubmit: (values) => {
      setStripeLoading(true)
      const apiData = {
        "userID": userID,
        "currentURL": currentUrl
      }
      console.log("first", apiData)
      stripe(apiData)
      .then((resp) => {
        const url = resp.data.url;
        window.location.href = url; 
        setStripeLoading(false)
      })
      .catch((err) => {
        console.log(err);
        // toast.error("Client ID or Password is Incorrect");
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
        <ClientStripeFormTitle>API Keys</ClientStripeFormTitle>
        <ClientStripeFormCombinedField>
          <ClientStripeFormFieldDifferent>
            <ClientStripeFormFieldLabelText>Stripe Publishable Key *</ClientStripeFormFieldLabelText>
            <ClientStripeFormFieldTextArea
              type="text"
              placeholder='Enter Publishable Key'
              name="stripePK"
              value={formik.values.stripePK}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.stripePK && formik.errors.stripePK ? (
              <ClientStripeFormError>{formik.errors.stripePK}</ClientStripeFormError>
            ) : null}
          </ClientStripeFormFieldDifferent>
          <ClientStripeFormFieldDifferent>
            <ClientStripeFormFieldLabelText>Stripe Secret Key *</ClientStripeFormFieldLabelText>
            <ClientStripeFormFieldTextArea
              type="text"
              placeholder='Enter Secret Key'
              name="stripeSK"
              value={formik.values.stripeSK}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.stripeSK && formik.errors.stripeSK ? (
              <ClientStripeFormError>{formik.errors.stripeSK}</ClientStripeFormError>
            ) : null}
          </ClientStripeFormFieldDifferent>
        </ClientStripeFormCombinedField>
        <ClientStripeFormButtonContainer>
          <ClientStripeFormCancelButton type="button">Cancel</ClientStripeFormCancelButton>
          <ClientStripeFormButton 
            type="submit" 
            onClick={formik.handleSubmit}
            disabled={stripeLoading}
          >
             {stripeLoading ? "Loading..." : "Save"}
          </ClientStripeFormButton>
        </ClientStripeFormButtonContainer>
      </ClientStripeFormContainer>
  );
};

export default ClientStripeForm;