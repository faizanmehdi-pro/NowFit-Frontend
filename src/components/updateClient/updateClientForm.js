import React, { useState } from 'react';
import { useFormik } from 'formik';
import { ClientStripeFormButton, ClientStripeFormButtonContainer, ClientStripeFormCancelButton, ClientStripeFormCombinedField, ClientStripeFormContainer, ClientStripeFormError, ClientStripeFormField, ClientStripeFormFieldDifferent, ClientStripeFormFieldInput, ClientStripeFormFieldLabelText, ClientStripeFormFieldTextArea, ClientStripeFormTitle } from './clientSettingStyles';
import ToggleStatus from './toggleStatus';
import { toast } from 'react-toastify';
import { updateClient } from '../../api/auth/updateClient';

const UpdateClientForm = ({getClientData, setUpdateClientData, setClientLoading, setAnalyticsLoading}) => {
  const [activeUser, setActiveUser] = useState(getClientData?.is_active);
  const [updateClientLoading, setUpdateClientLoading] = useState(false);
  console.log("aaaa", activeUser)
  const formik = useFormik({
    initialValues: {
      name: getClientData?.name,
      email: getClientData?.email,
      commissionPercentage: getClientData?.commission_rate,
    },
    
    onSubmit: (values) => {
      setUpdateClientLoading(true); 
      const updateClientInformation = {
        userId: getClientData?.id,
        name: values.name,
        commissionPercentage: values.commissionPercentage,
        is_active: activeUser
      }
      updateClient(updateClientInformation)
      .then((resp) => {
        toast.success("Client Updated Successfully");
        setUpdateClientData(false);
        setClientLoading(true)
        setAnalyticsLoading(true)
        setUpdateClientLoading(false)
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
          </ClientStripeFormField>
          <ClientStripeFormField>
            <ClientStripeFormFieldLabelText>Status</ClientStripeFormFieldLabelText>
            <ToggleStatus activeUser={activeUser} setActiveUser={setActiveUser}/>
          </ClientStripeFormField>
        </ClientStripeFormCombinedField>
        <ClientStripeFormButtonContainer>
          <ClientStripeFormCancelButton type="button" onClick={() => { setClientLoading(true); setUpdateClientData(false); }}>Cancel</ClientStripeFormCancelButton>
          <ClientStripeFormButton type="submit" onClick={formik.handleSubmit} disabled={updateClientLoading}>{updateClientLoading ? "Loading..." : "Save" }</ClientStripeFormButton>
        </ClientStripeFormButtonContainer>
      </ClientStripeFormContainer>
  );
};

export default UpdateClientForm;