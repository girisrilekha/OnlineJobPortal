import { useState, useEffect, useContext } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Modal,
  Slider,
} from "@material-ui/core";
import axios from "axios";

import { SetPopupContext } from "../App";

import apiList from "../lib/apiList";
import { userType } from "../lib/isAuth";

import { useHistory } from "react-router-dom";

// ICON IMPORT
import { FaClipboard,FaRegistered,FaMapMarkerAlt,FaHistory,FaFireAlt } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  button: {
    width: "100%",
    height: "100%",
  },
  jobTileOuter: {
    padding: "10px",
    margin: "10px 0",
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

const JobTile = (props) => {
  const classes = useStyles();
  const { job } = props;
  const setPopup = useContext(SetPopupContext);

  const [open, setOpen] = useState(false);
  const [sop, setSop] = useState("");

  let history = useHistory();

  const handleClose = () => {
    setOpen(false);
    setSop("");
  };

  const handleApply = () => {
    console.log(job._id);
    console.log(sop);
    axios
      .post(
        `${apiList.jobs}/${job._id}/applications`,
        {
          sop: sop,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        handleClose();
      })
      .catch((err) => {
        console.log(err.response);
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        handleClose();
      });
  };

  const handleLocation = (location) =>{
    console.log(location);
    history.push(location);
  }

  const deadline = new Date(job.deadline).toLocaleDateString();
  console.log(job)
  return (
    <div>
       <div className="row m-2">
          <div className="col-md-12 py-2 bg-color jobs-data">
            <h3>{job.title}</h3>
            <h4>{job.recruiter.name}</h4>
            <div className="d-flex my-3 job-sub">
              <span><FaClipboard />{job.jobType}</span>
              <span><FaRegistered />{job.salary} LPA</span>
              <span><FaMapMarkerAlt />{job.location}</span>
            </div>
            <div className="job-description">
              <p>{job.description}</p>
            </div>
            <div className="job-skills">
              <p>Skills Required : {job.skillsets}</p>
            </div>
            <div className="d-flex my-2 job-btn">
              <span className="me-3"><FaFireAlt className="color-orange" /><span>HOT JOB</span></span>
              <span><FaHistory /><span>Deadline: {deadline}</span></span>
            </div>
            <div>
              <button className="btn btn-success my-2"
               onClick={() => {
                setOpen(true);
              }}
              disabled={userType() === "recruiter"}
              >Apply To Job</button>
            </div>
            
          </div>
        </div>
    
      <div className={classes.jobTileOuter} >
       
        <Modal open={open} onClose={handleClose} className={classes.popupDialog}>
          <Paper
            style={{
              padding: "20px",
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              minWidth: "50%",
              alignItems: "center",
            }}
          >
            <TextField
              label="Write SOP (upto 250 words)"
              multiline
              rows={8}
              style={{ width: "100%", marginBottom: "30px" }}
              variant="outlined"
              value={sop}
              onChange={(event) => {
                if (
                  event.target.value.split(" ").filter(function (n) {
                    return n != "";
                  }).length <= 250
                ) {
                  setSop(event.target.value);
                }
              }}
            />
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px" }}
              onClick={() => handleApply()}
            >
              Submit
            </Button>
          </Paper>
        </Modal>
      </div>
      </div>
  );
};

const FilterPopup = (props) => {
  const classes = useStyles();
  const { open, handleClose, searchOptions, setSearchOptions, getData } = props;
  return (

      <Paper
        style={{
          padding: "50px",
          outline: "none",
          minWidth: "50%",
        }}
      >
        <Grid container direction="column" alignItems="center" spacing={3}>
          
            <div className="col-md-12">
              <h2>Salary</h2>
        
              <Slider
                valueLabelDisplay="auto"
                valueLabelFormat={(value) => {
                  return value * (100000 / 100);
                }}
                marks={[
                  { value: 0, label: "0" },
                  { value: 100, label: "100000" },
                ]}
                value={searchOptions.salary}
                onChange={(event, value) =>
                  setSearchOptions({
                    ...searchOptions,
                    salary: value,
                  })
                }
              />
            </div>
          
         

          <Grid item>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px" }}
              onClick={() => getData()}
            >
              Apply
            </Button>
          </Grid>
        </Grid>
      </Paper>
    // </Modal>
  );
};



const Home = (props) => {
  const [jobs, setJobs] = useState([]);
  const [filterOpen, setFilterOpen] = useState(false);
  const [searchOptions, setSearchOptions] = useState({
    query: "",
    jobType: {
      fullTime: false,
      partTime: false,
      wfh: false,
    },
    salary: [0, 100],
    duration: "0",
    sort: {
      salary: {
        status: false,
        desc: false,
      },
      duration: {
        status: false,
        desc: false,
      },
      rating: {
        status: false,
        desc: false,
      },
    },
  });

  const setPopup = useContext(SetPopupContext);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let searchParams = [];
    if (searchOptions.query !== "") {
      searchParams = [...searchParams, `q=${searchOptions.query}`];
    }
    if (searchOptions.jobType.fullTime) {
      searchParams = [...searchParams, `jobType=Full%20Time`];
    }
    if (searchOptions.jobType.partTime) {
      searchParams = [...searchParams, `jobType=Part%20Time`];
    }
    if (searchOptions.jobType.wfh) {
      searchParams = [...searchParams, `jobType=Work%20From%20Home`];
    }
    if (searchOptions.salary[0] != 0) {
      searchParams = [
        ...searchParams,
        `salaryMin=${searchOptions.salary[0] * 1000}`,
      ];
    }
    if (searchOptions.salary[1] != 100) {
      searchParams = [
        ...searchParams,
        `salaryMax=${searchOptions.salary[1] * 1000}`,
      ];
    }
    if (searchOptions.duration != "0") {
      searchParams = [...searchParams, `duration=${searchOptions.duration}`];
    }

    let asc = [],
      desc = [];

    Object.keys(searchOptions.sort).forEach((obj) => {
      const item = searchOptions.sort[obj];
      if (item.status) {
        if (item.desc) {
          desc = [...desc, `desc=${obj}`];
        } else {
          asc = [...asc, `asc=${obj}`];
        }
      }
    });
    searchParams = [...searchParams, ...asc, ...desc];
    const queryString = searchParams.join("&");
    console.log(queryString);
    let address = apiList.jobs;
    if (queryString !== "") {
      address = `${address}?${queryString}`;
    }

    axios
      .get(address, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setJobs(
          response.data.filter((obj) => {
            const today = new Date();
            const deadline = new Date(obj.deadline);
            return deadline > today;
          })
        );
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
    <>
      <div className="container">
        <div className="row">
         <h2 className="text-center">Jobs</h2>
          <div className="col-6 col-md-4">
            
          
            <div className="">
              <FilterPopup
                open={filterOpen}
                searchOptions={searchOptions}
                setSearchOptions={setSearchOptions}
                handleClose={() => setFilterOpen(false)}
                getData={() => {
                  getData();
                  setFilterOpen(false);
                }}
              />
              
            </div>
          </div>
          <div className="col-md-8">
          {jobs.length > 0 ? (
            jobs.map((job) => {
              return <JobTile job={job} />;
            })
          ) : (
            <div>
              No jobs found
            </div>
          )}
        </div>
        </div>

       
        
      </div>
      
    </>
  );
};

export default Home;
