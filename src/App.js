import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
import ForgotPassword from "./pages/userAuthentication/forgotPassword";
import VerifyOTP from "./pages/userAuthentication/verifyOTP";
import ResetPassword from "./pages/userAuthentication/resetPassword";
import Home from './pages/home/adminPanel';
import { useState } from 'react';
import SignIn from './pages/userAuthentication/signIn';

function App() {
  const [changePasswordEmail, setChangePasswordEmail] = useState();
  const [otpManualCode, setOtpManualCode] = useState('');
  const [userID, setUserID] = useState();

  return (
    <>
      <Router>
        <Routes> 
          <Route
            path="/"
            exact
            element={<SignIn />}
          /> 
          <Route
            path="/:pathname"
            exact
            element={<Home />}
          /> 
          <Route
            path="/forgotPassword"
            exact
            element={<ForgotPassword setOtpManualCode={setOtpManualCode} setChangePasswordEmail={setChangePasswordEmail}/>}
          /> 
          <Route
            path="/verifyOTP"
            exact
            element={<VerifyOTP otpManualCode={otpManualCode} setOtpManualCode={setOtpManualCode} changePasswordEmail={changePasswordEmail} setUserID={setUserID}/>}
          /> 
          <Route
            path="/resetPassword"
            exact
            element={<ResetPassword changePasswordEmail={changePasswordEmail} userID={userID}/>}
          /> 
          <Route
            path="/changePassword"
            exact
            element={<signInForm />}
          />
        </Routes>
      </Router>
      <ToastContainer
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </>
  );
}

export default App;
