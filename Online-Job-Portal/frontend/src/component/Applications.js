import { useState, useEffect, useContext } from "react";
import {
  Chip,
  makeStyles,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";

import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  statusBlock: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "uppercase",
  },
  jobTileOuter: {
    padding: "30px",
    margin: "20px 0",
    boxSizing: "border-box",
    width: "100%",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const ApplicationTile = (props) => {
  const classes = useStyles();
  const { application } = props;
  const setPopup = useContext(SetPopupContext);
  // const [open, setOpen] = useState(false);
  // const [rating, setRating] = useState(application.job.rating);

  const appliedOn = new Date(application.dateOfApplication);
  const joinedOn = new Date(application.dateOfJoining);

  

  const colorSet = {
    applied: "#3454D1",
    shortlisted: "#DC851F",
    accepted: "#09BC8A",
    rejected: "#D1345B",
    deleted: "#B49A67",
    cancelled: "#FF8484",
    finished: "#4EA5D9",
  };

  return (
    <div className="application">
      <div className="row bg-color my-3 py-5 card-hover">
        <div className="col-md-8">
          <div item>
            <h5 >{application.job.title}</h5>
          </div>
          <div className="application-text">Posted By: {application.recruiter.name}</div>
          <div  className="application-text">Role : {application.job.jobType}</div>
          <div  className="application-text">Salary : &#8377; {application.job.salary} per month</div>
          <div  className="application-text">
            Duration :{" "}
            {application.job.duration !== 0
              ? `${application.job.duration} month`
              : `Flexible`}
          </div>
          <div  className="application-text">
            Skill:
            {application.job.skillsets}
          </div>
          <div  className="application-text">Applied On: {appliedOn.toLocaleDateString()}</div>
          {application.status === "accepted" ||
          application.status === "finished" ? (
            <div>Joined On: {joinedOn.toLocaleDateString()}</div>
          ) : null}
        </div>
        <div className="col-md-4">
          <div style={{width:'100%',height:'100%'}}>
            <div
              className={classes.statusBlock}
              style={{
                background: colorSet[application.status],
                color: "#ffffff",
              }}
            >
              {application.status}
            </div>
          </div>
         
        </div>
      </div>
      
    </div>
  );
};

const Applications = (props) => {
  const setPopup = useContext(SetPopupContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiList.applications, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setApplications(response.data);
      })
      .catch((err) => {
        
        console.log(err.response.data);
        setPopup({
          open: true,
          severity: "error",
          message: "Error",
        });
      });
  };

  return (
    <div className="container">
      <div>
        <h2 className="text-center">Applications</h2>
      </div>
      <div
        
        style={{ width: "100%" }}
      >
        {applications.length > 0 ? (
          applications.map((obj) => (
            <div>
              <ApplicationTile application={obj} />
            </div>
          ))
        ) : (
          <h5 style={{ textAlign: "center" }}>
            No Applications Found
          </h5>
        )}
      </div>
    </div>
  );
};

export default Applications;
