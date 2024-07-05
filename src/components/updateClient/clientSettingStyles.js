import styled from "styled-components";

export const ClientSettingContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`;

export const ClientStripeFormContainer = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
background: #fff;
padding: 30px;
border-radius: 8px;
@media screen and (max-width: 760px) {padding: 20px;}
`;

export const ClientStripeFormTitle = styled.h3`
color: #F78852;
`;

export const ClientStripeFormCombinedField = styled.div`
display: flex;
gap: 30px;
@media screen and (max-width: 760px) {
flex-direction: column;
align-items: flex-start;
gap: 10px;
}
`;

export const ClientStripeFormField = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 50%;
height: 120px;
@media screen and (max-width: 760px) {
width: 100%;
}
`;


export const ClientStripeFormFieldDifferent = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 50%;
height: 190px;
@media screen and (max-width: 760px) {
width: 100%;
}
`;

export const ClientStripeFormFieldLabelText = styled.label`
color: #000;
font-size: 16px;
font-weight: 600;
`;

export const ClientStripeFormFieldInput = styled.input`
border: 1px solid #D9D9D9;
padding: 0 10px;
border-radius: 8px;
height: 50px;
outline: none;
color: #000;
font-size: 16px;
font-weight: 600;

&::placeholder{
    color: #A7A7A7;
    font-size: 16px;
    font-weight: 600;
}
`;

export const ClientStripeFormFieldTextArea = styled.textarea`
border: 1px solid #D9D9D9;
padding: 10px;
border-radius: 8px;
height: 120px;
outline: none;
color: #000;
font-size: 16px;
font-weight: 600;

&::placeholder{
    color: #A7A7A7;
    font-size: 16px;
    font-weight: 600;
}
`;

export const ClientStripeFormError = styled.p`
color: red;
`;

export const ClientStripeFormButtonContainer = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
gap: 20px;
`;

export const ClientStripeFormCancelButton = styled.button`
background: #EBE9E9;
border: none;
border-radius: 8px;
height: 50px;
width: 130px;
color: #F78852;
font-weight: 600;
font-size: 18px;
cursor: pointer;
`;

export const ClientStripeFormButton = styled.button`
background: #F78852;
border: none;
border-radius: 8px;
height: 50px;
width: 130px;
color: #fff;
font-weight: 600;
font-size: 18px;
cursor: pointer;

&:disabled{
    cursor: not-allowed;
    background: #000;
}
`;

export const DescriptionFormFieldTextArea = styled.textarea`
border: 1px solid #D9D9D9;
padding: 10px;
border-radius: 8px;
height: 120px;
outline: none;
color: #000;
font-size: 16px;
font-weight: 600;

&::placeholder{
    color: #A7A7A7;
    font-size: 16px;
    font-weight: 600;
}
`;