import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import isAuth, { userType } from "../lib/isAuth";

import logo from './SubCompo/Images/PlaceMint.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();

  const handleClick = (location) => {
    console.log(location);
    history.push(location);
  };

  return (
      <div>
          <nav className="navbar navbar-expand-lg static-top navbar-des">
            <div className="container">
              <Link className="navbar-brand" href="#">
                {/* <img src={logo} onClick={()=>{handleClick('/')}} alt="..." height={36} /> */}
                <h2 onClick={()=>{handleClick('/')}}>Online Job Portal</h2>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    
                  </li>
                        {isAuth() ? (
                userType() === "recruiter" ? (
                  <>
                  
                    <li color="inherit" >
                      <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/addjob")}>Add Jobs</Link>
                    </li>
                    <li color="inherit">
                      <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/myjobs")}>My Jobs</Link>
                    </li>
                    <li color="inherit">
                      <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/employees")}>Employees</Link>
                    </li>
                    <li color="inherit">
                      <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/profile")}>Profile</Link>
                    </li>
                    <li color="inherit">
                      <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/logout")}>Logout</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li color="inherit" >
                      <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/home")}>Home</Link>
                    </li>
                    <li
                      color="inherit"
                      
                    >
                      <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/applications")}>Applications</Link>
                    </li>
                    <li color="inherit">
                      <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/profile")}>Profile</Link>
                    </li>
                    <li color="inherit" >
                      <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/logout")}>Logout</Link>
                    </li>
                  </>
                )
              ) : (
                <>
                  <li color="inherit">
                    <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/login")}>Login</Link>
                  </li>
                  <li color="inherit">
                    <Link className="nav-link active" aria-current="page" onClick={() => handleClick("/signup")}>Sign Up</Link>
                  </li>
                </>
              )}
                </ul>
              </div>
            </div>
          </nav>


      
    {/* <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Job Portal
        </Typography>
        {isAuth() ? (
          userType() === "recruiter" ? (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => handleClick("/addjob")}>
                Add Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                My Jobs
              </Button>
              <Button color="inherit" onClick={() => handleClick("/employees")}>
                Employees
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => handleClick("/home")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleClick("/applications")}
              >
                Applications
              </Button>
              <Button color="inherit" onClick={() => handleClick("/profile")}>
                Profile
              </Button>
              <Button color="inherit" onClick={() => handleClick("/logout")}>
                Logout
              </Button>
            </>
          )
        ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              Login
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              Signup
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar> */}
    </div>
  );
};

export default Navbar;
