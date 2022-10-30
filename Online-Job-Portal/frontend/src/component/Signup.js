import { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import { Redirect } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import DescriptionIcon from "@material-ui/icons/Description";
import FaceIcon from "@material-ui/icons/Face";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import PasswordInput from "../lib/PasswordInput";
import EmailInput from "../lib/EmailInput";
import FileUploadInput from "../lib/FileUploadInput";
import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import isAuth from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "",
  },
  submitButton: {
    width: "400px",
  },
}));

const MultifieldInput = (props) => {
  const classes = useStyles();
  const { education, setEducation } = props;

  return (
    <>
      {education.map((obj, key) => (
        <Grid
          item
          container
          className={classes.inputBox}
          key={key}
          style={{ paddingLeft: 0, paddingRight: 0 }}
        >
          <Grid style={{marginBottom:'10px'}} item xs={6}>
            <TextField
              label={`Institution Name #${key + 1}`}
              value={education[key].institutionName}
              onChange={(event) => {
                const newEdu = [...education];
                newEdu[key].institutionName = event.target.value;
                setEducation(newEdu);
              }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Start Year"
              value={obj.startYear}
              variant="outlined"
              type="number"
              onChange={(event) => {
                const newEdu = [...education];
                newEdu[key].startYear = event.target.value;
                setEducation(newEdu);
              }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="End Year"
              value={obj.endYear}
              variant="outlined"
              type="number"
              onChange={(event) => {
                const newEdu = [...education];
                newEdu[key].endYear = event.target.value;
                setEducation(newEdu);
              }}
            />
          </Grid>
        </Grid>
      ))}
      <Grid item>
        <Button
          variant="contained"
          color='primary'
          onClick={() =>
            setEducation([
              ...education,
              {
                institutionName: "",
                startYear: "",
                endYear: "",
              },
            ])
          }
          className={classes.inputBox}
        >
          Add another institution details
        </Button>
      </Grid>
    </>
  );
};

const Login = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [signupDetails, setSignupDetails] = useState({
    type: "applicant",
    email: "",
    password: "",
    name: "",
    education: [],
    skills: [],
    resume: "",
    profile: "",
    bio: "",
    contactNumber: "",
  });

  const [phone, setPhone] = useState("");

  const [education, setEducation] = useState([
    {
      institutionName: "",
      startYear: "",
      endYear: "",
    },
  ]);

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    password: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    name: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setSignupDetails({
      ...signupDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        required: true,
        untouched: false,
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const tmpErrorHandler = {};
    Object.keys(inputErrorHandler).forEach((obj) => {
      if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
        tmpErrorHandler[obj] = {
          required: true,
          untouched: false,
          error: true,
          message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
        };
      } else {
        tmpErrorHandler[obj] = inputErrorHandler[obj];
      }
    });

    console.log(education);

    let updatedDetails = {
      ...signupDetails,
      education: education
        .filter((obj) => obj.institutionName.trim() !== "")
        .map((obj) => {
          if (obj["endYear"] === "") {
            delete obj["endYear"];
          }
          return obj;
        }),
    };
    console.log('UPDATED DETAILE OBJECT : ',updatedDetails)
    setSignupDetails(updatedDetails);

    const verified = !Object.keys(tmpErrorHandler).some((obj) => {
      return tmpErrorHandler[obj].error;
    });


    if (verified) {
      axios
        .post(apiList.signup, updatedDetails)
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
          console.log(err);
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          
        });
    } else {
      setInputErrorHandler(tmpErrorHandler);
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  const handleLoginRecruiter = () => {
    const tmpErrorHandler = {};
    Object.keys(inputErrorHandler).forEach((obj) => {
      if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
        tmpErrorHandler[obj] = {
          required: true,
          untouched: false,
          error: true,
          message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
        };
      } else {
        tmpErrorHandler[obj] = inputErrorHandler[obj];
      }
    });

    let updatedDetails = {
      ...signupDetails,
    };
    if (phone !== "") {
      updatedDetails = {
        ...signupDetails,
        contactNumber: `+${phone}`,
      };
    } else {
      updatedDetails = {
        ...signupDetails,
        contactNumber: "",
      };
    }

    setSignupDetails(updatedDetails);

    const verified = !Object.keys(tmpErrorHandler).some((obj) => {
      return tmpErrorHandler[obj].error;
    });

    console.log(updatedDetails);

    if (verified) {
      axios
        .post(apiList.signup, updatedDetails)
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
      setInputErrorHandler(tmpErrorHandler);
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
    <div className="uni-padding">
      <div className="row justify-content-center py-5 signup-row">
      <div className="col-md-6 col-12 signup-section">
        <div className="signup-head mb-4 text-center">
          <h1>
            Signup
          </h1>
        </div>
        <div className="mb-3">
            <select className="form-select"
              aria-label="Default select example"
              value={signupDetails.type}
              onChange={(event) => {
                handleInput("type", event.target.value);
              }}
            >
              <option>Select the below category :-</option>
              <option value="recruiter">Recruiter</option>
              <option value="applicant">Applicant</option>
            </select>
         
        </div>
        <div>
            <div className="mb-3">
                <input type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="nameHelp"
                    placeholder='Enter Name'
                    name='name'
                    value={signupDetails.name}
                    onChange={(event) => handleInput("name", event.target.value)}
                    onBlur={(event) => {
                      if (event.target.value === "") {
                        handleInputError("name", true, "Name is required");
                      } else {
                        handleInputError("name", false, "");
                      }
                    }}
                />
                <div className="error-message">{inputErrorHandler.name.message}</div>
            </div>
          
        </div>
        <div>
         
           <div className="mb-3">
              <input type="email"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder='Enter Email'
                  name='email'
                  value={signupDetails.email}
                  onChange={(event) => handleInput("email", event.target.value)}
                  
                  onBlur={(event) => {
                      if (event.target.value === "") {
                        handleInputError("email", true, "Name is required");
                      } else {
                        handleInputError("email", false, "");
                      }
                    }}
              />
              <div className="error-message">{inputErrorHandler.email.message}</div>
          </div>
        </div>
        <div >
          
          <div className="mb-3">
              <input type="password"
                  className="form-control"
                  id="exampleInputPassword"
                  placeholder='Enter Password'
                  name='password'
                  value={signupDetails.password}
                  onChange={(event) => handleInput("password", event.target.value)}
                  onBlur={(event) => {
                  if (event.target.value === "") {
                    handleInputError("password", true, "Password is required");
                  } else {
                    handleInputError("password", false, "");
                  }
                }}
              />
              <div className="error-message">{inputErrorHandler.password.message}</div>
          </div>
        </div>
        {signupDetails.type === "applicant" ? (
          <>
            <div className="text-center">
              <h4 className="my-3 text-center text-color">Institution Details</h4>
              <MultifieldInput
              
                education={education}
                setEducation={setEducation}
              />
            </div>
            
            <h4 className="my-3 text-center text-color">Employee Information:</h4>
            <div className="mb-5">
              <ChipInput
                className={classes.inputBox}
                label="Skills"
                variant="outlined"
                helperText="Press enter to add skills"
                onChange={(chips) =>
                  setSignupDetails({ ...signupDetails, skills: chips })
                }
              />
             
            </div>
            <div >
              <FileUploadInput
                className={classes.inputBox}
                label="Resume (.pdf)"
                icon={<DescriptionIcon />}
               
                uploadTo={apiList.uploadResume}
                handleInput={handleInput}
                identifier={"resume"}
              />
            </div>
        
          </>
        ) : (
          <>
            <div>
            <div className="mb-3">
                <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder='Enter Bio (upto 250 words)'
                    name='bio'
                    value={signupDetails.bio}
                    onChange={(event) => {
                      if (
                        event.target.value.split(" ").filter(function (n) {
                          return n != "";
                        }).length <= 250
                      ) {
                        handleInput("bio", event.target.value);
                      }
                    }}
                >
                </textarea>
            </div>
             
            </div>
            <div item>
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
         
            </div>
          </>
        )}

        <div className="my-3 text-center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              signupDetails.type === "applicant"
                ? handleLogin()
                : handleLoginRecruiter();
            }}
            className={classes.submitButton}
          >
            Signup
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Login;


