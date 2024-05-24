import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"
import ForgotPassword from "./pages/userAuthentication/forgotPassword";
import VerifyOTP from "./pages/userAuthentication/verifyOTP";
import ResetPassword from "./pages/userAuthentication/resetPassword";
import ChangePassword from "./pages/userAuthentication/changePassword";
import Home from './pages/home/adminPanel';
import SignInForm from './components/userAuthentication/signInForm';
import { useState } from 'react';

function App() {
  const token = localStorage.getItem('token');
  const [changePasswordEmail, setChangePasswordEmail] = useState();
  const [userID, setUserID] = useState();

  return (
    <>
      <Router>
        <Routes> 
          <Route
            path="/"
            exact
            element={token ? <Home /> : <SignInForm />}
          /> 
          {/* <Route
            path="/signUp"
            exact
            element={<SignUp />}
          />  */}
          {/* <Route
            path="/signIn"
            exact
            element={<SignIn />}
          />  */}
          <Route
            path="/forgotPassword"
            exact
            element={<ForgotPassword setChangePasswordEmail={setChangePasswordEmail}/>}
          /> 
          <Route
            path="/verifyOTP"
            exact
            element={<VerifyOTP changePasswordEmail={changePasswordEmail} setUserID={setUserID}/>}
          /> 
          <Route
            path="/resetPassword"
            exact
            element={<ResetPassword userID={userID}/>}
          /> 
          <Route
            path="/changePassword"
            exact
            element={<ChangePassword />}
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
