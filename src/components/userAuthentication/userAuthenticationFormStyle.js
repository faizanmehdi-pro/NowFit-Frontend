import styled from "styled-components";
import { FaRegEye, FaRegEyeSlash, FaArrowRightLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export const AuthPageContainer = styled.div`
background: radial-gradient(26.25% 39.34% at 33.09% 3.61%, #583892 0%, #0F172A 97.73%);
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
gap: 40px;
padding: 2rem;
@media screen and (max-width: 1920px) {gap: 20px; padding: 1rem;}
@media screen and (max-width: 1600px) {gap: 20px;}
`;
export const AuthForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 30px;
width: 600px;
@media screen and (max-width: 1920px) {gap: 20px;}
@media screen and (max-width: 1600px) {gap: 15px; width: 400px}
@media screen and (max-width: 768px) {gap: 15px; width: 90%}
`;
export const AuthFormTitle = styled.h1`
color: #FEFEFE;
font-size: 38px;
font-style: normal;
font-weight: 800;
line-height: normal;
text-align: center;
margin-bottom: 20px;
@media screen and (max-width: 768px) {font-size: 28px;}
`;
export const AuthFormField = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`;
export const AuthFormFieldLabel = styled.div`
display: flex;
align-items: center;
`;
export const AuthFormFieldLabelText = styled.p`
color: #FFF;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
@media screen and (max-width: 1920px) {font-size: 22px;}
@media screen and (max-width: 1600px) {font-size: 18px;}
`;
export const AuthFormFieldLabelSign = styled.p`
color: #D9354F;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: normal;
@media screen and (max-width: 1920px) {font-size: 22px;}
@media screen and (max-width: 1600px) {font-size: 18px;}
`;
export const AuthFormFieldInput = styled.input`
border-radius: 10px;
background: #1E293B;
height: 70px;
color: #FFF;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
border: none;
outline: none;
padding: 0 15px;
::placeholder{
    color: #66789A;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
@media screen and (max-width: 1920px) {
    height: 50px; 
    font-size: 20px;
    border-radius: 8px;
    ::placeholder{font-size: 20px;}
}
@media screen and (max-width: 1600px) {
    height: 40px; 
    font-size: 16px;
    border-radius: 8px;
    padding: 0 10px;
    ::placeholder{font-size: 16px;}
}
`;
export const AuthFormPasswordField = styled.div`
display: flex;
align-items: center;
border-radius: 10px;
background: #1E293B;
height: 70px;
@media screen and (max-width: 1920px) {height: 50px;}
@media screen and (max-width: 1600px) {height: 40px;}
`;
export const AuthFormPasswordFieldInput = styled.input`
width: 100%;
height: 100%;
background: none;
outline: none;
color: #FFF;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
border: none;
outline: none;
padding: 0 15px;
::placeholder{
    color: #66789A;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
@media screen and (max-width: 1920px) {
    font-size: 20px;
    border-radius: 8px;
    ::placeholder{font-size: 20px;}
}
@media screen and (max-width: 1600px) {
    font-size: 16px;
    border-radius: 8px;
    padding: 0 10px;
    ::placeholder{font-size: 16px;}
}
`;
export const PasswordShowIcon = styled(FaRegEye)`
font-size: 35px;
margin: 0 20px;
cursor: pointer;
color: #FFF;
@media screen and (max-width: 1920px) {font-size: 30px;}    
@media screen and (max-width: 1600px) {font-size: 24px; margin: 0 15px;}
`;
export const PasswordHideIcon = styled(FaRegEyeSlash)`
font-size: 35px;
margin: 0 20px;
cursor: pointer;
color: #FFF;
@media screen and (max-width: 1920px) {font-size: 30px;}   
@media screen and (max-width: 1600px) {font-size: 24px; margin: 0 15px;}
`;
export const AuthFormButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
border: none;
border-radius: 30px;
background: #F78852;
height: 60px;
cursor: pointer;
color: #FFF;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 10px;
@media screen and (max-width: 1920px) {height: 50px; font-size: 22px;}   
@media screen and (max-width: 1600px) {height: 40px; font-size: 16px;}

`;
export const NextIcon = styled(FaArrowRightLong)`
font-size: 24px;
@media screen and (max-width: 1920px) {font-size: 22px;}  
@media screen and (max-width: 1600px) {font-size: 16px;}
`;
export const AuthFormAlternativeOption = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
color: #C7C7C7;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
@media screen and (max-width: 1920px) {font-size: 22px;}  
@media screen and (max-width: 1600px) {font-size: 16px; gap: 5px;}
`;
export const AuthFormAlternativeButton = styled.button`
color: #F78852;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
background: none;
border: none;
outline: none;
cursor: pointer;
@media screen and (max-width: 1920px) {font-size: 22px;}  
@media screen and (max-width: 1600px) {font-size: 18px;}
`;
export const AuthFormDividerContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 30px;
color: #999BA0;
font-size: 24px;
font-style: italic;
font-weight: 400;
line-height: normal;
@media screen and (max-width: 1920px) {font-size: 22px;}
@media screen and (max-width: 1600px) {font-size: 16px;}
`;
export const AuthFormDivider = styled.div`
width: 258px;
height: 1px;
background: #D9D9D9;
`;
export const GoogleIcon = styled(FcGoogle)`
width: 26.25px;
height: 30px;
@media screen and (max-width: 1600px) {width: 20px; height: 27px;}
`;
export const AuthFormError = styled.p`
color: red;
@media screen and (max-width: 1600px) {font-size: 14px;}
`;
export const AuthFormPasswordFieldLabel = styled.div`
display: flex;
justify-content: space-between;
`;
export const AuthFormForgetPassword = styled(Link)`
color: #F78852;
font-size: 24px;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
text-decoration: none;
@media screen and (max-width: 1920px) {font-size: 22px;}
@media screen and (max-width: 1600px) {font-size: 18px;}
`;
export const AuthFormOTPTitle = styled.h2`
color: #B9BFCA;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-size: 40px;
font-style: normal;
font-weight: 800;
line-height: normal;
text-align: center;  
@media screen and (max-width: 1600px) {font-size: 30px;}
`;
export const AuthFormOTPHeading = styled.p`
color: #FFF;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-align: center;  
@media screen and (max-width: 1600px) {font-size: 24px;}
`;
export const AuthFormVerifyOTP = styled.div`
display: flex;
justify-content: center;
color: #FFF;
font-weight: bold;
.character{
    border: solid #999BA0;
    border-width: 0 0 6px 0;
    background: none;
    outline: none;
    color: #FFF;
}
.character--selected{
    border: solid #5C5757;
    border-width: 0 0 6px 0;
    background: none;
    outline: none;
    color: #FFF;
}
`;
