import React, { Component } from "react";
import Android from "./Images/JobCategories/AndroidDeveloper.jpg";
import Cloud from "./Images/JobCategories/Cloud.jpg";
import IOT from "./Images/JobCategories/IOT.jpg";
import ML from "./Images/JobCategories/MachineLearning.jpg";
import Software from "./Images/JobCategories/SoftwareDeveloper.jpg";
import WebDeveloper from "./Images/JobCategories/WebDeveloper.jpg";
export class JobCategories extends Component {
  render() {
    return (
      <div className="job-categories">
        <h2 className="tittle"> Job Categories</h2>
        <div className="d-flex justify-content-between rows">
          <div className="card w-25">
            <img src={Android} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Android Developer</h5>
              <p className="card-text">
                We are looking for an Android Developer who possesses a passion
                for pushing mobile technologies to the limits. This Android app
                developer will work with our team of talented engineers to
                design and build the next generation of our mobile applications.
              </p>
              <a href="#" className="btn ">
                See Jobs
              </a>
            </div>
          </div>
          <div className="card w-25">
            <img src={Cloud} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Cloud Engineer</h5>
              <p className="card-text">
                It’s a fantastic time to explore a career in cloud development.
                Cloud Developers are a hot commodity, and as more and more
                companies adopt cloud computing services cloud computing skills
                will become even more invaluable.
              </p>
              <a href="#" className="btn ">
                See Jobs
              </a>
            </div>
          </div>
          <div className="card w-25">
            <img src={IOT} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">IOT Engineer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn ">
                See Jobs
              </a>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between rows">
          <div className="card w-25">
            <img src={ML} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Machine Learning </h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn ">
                See Jobs
              </a>
            </div>
          </div>
          <div className="card w-25">
            <img src={Software} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Software Developer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn ">
                See Jobs
              </a>
            </div>
          </div>
          <div className="card w-25">
            <img src={WebDeveloper} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Web Developer</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn ">
                See Jobs
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobCategories;
