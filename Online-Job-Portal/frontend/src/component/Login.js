import { useContext, useState } from "react";
import {Link} from 'react-router-dom';
import {
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";

import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "300px",
  },
  submitButton: {
    width: "300px",
  },
}));

const Login = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      error: false,
      message: "",
    },
    password: {
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setLoginDetails({
      ...loginDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const verified = !Object.keys(inputErrorHandler).some((obj) => {
      return inputErrorHandler[obj].error;
    });
    if (verified) {
      axios
        .post(apiList.login, loginDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  return loggedin ? (
    <Redirect to="/" />
  ) : (
        <div className='uni-padding'>
        <div className="row justify-content-center login-row">
            <div className="col-md-6 col-12 ">
                <div className='login-form'>
                    <div className="form-head text-center mb-5">
                        <h1>Login</h1>
                    </div>
                    <div className="mb-4">
                        <input type="email"
                            className="form-control"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder='Enter Email'
                            name='email'
                            value={loginDetails.email}
                            onChange={(event) => handleInput("email", event.target.value)}
                        />
                    </div>
                    
                    <div className="mb-3">
                        <input type="password"
                            className="form-control"
                            id="exampleInputPassword"
                            placeholder='Enter Password'
                            name='password'
                            value={loginDetails.password}
                            onChange={(event) => handleInput("password", event.target.value)}
                        />
                    </div>
                    
                    <div className="form-btn text-center">
                        {/* <button type="submit" className="btn btn-danger mx-3" onClick={resetForm}>Reset</button> */}
                        <button type="submit" className="btn btn-primary" onClick={() => handleLogin()}>Submit</button>
                    </div>

                    <div className="new-user mt-4 text-center">
                        <Link to={"/signup"} style={{"textDecoration":"none"}}>
                            <p className='text-dark'>New User? Register as Recruiter/Applicant</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Login;
