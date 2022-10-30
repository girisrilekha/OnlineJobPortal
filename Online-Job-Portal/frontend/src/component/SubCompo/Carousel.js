import React, { Component } from "react";
import hero1 from "./Images/hero1.png";
import hero2 from "./Images/hero2.png";
import hero3 from "./Images/hero3.png";
export class Carousel extends Component {
  render() {
    return (
      <div className="CarausalBox">
        <div
          id="carouselExampleCaptions"
          className="carousel slide Boxx"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner ">
            <div className="carousel-item active ">
              <div className=" carousel-caption d-none d-md-block  position-static float-start">
                <h2>Find the career you deserve</h2>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>

              <img
                src={hero1}
                className="d-block  hero-Img float-end"
                alt="..."
              />
            </div>
            <div className="carousel-item   ">
              <div className="carousel-caption d-none d-md-block  position-static float-start">
                <h2>10000+ Jobs waiting for you!</h2>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
              <img
                src={hero2}
                className="d-block hero-Img float-end"
                alt="..."
              />
            </div>
            <div className="carousel-item ">
              <div className="carousel-caption d-none d-md-block  position-static float-start">
                <h2>Post a job and hunt amazing talents</h2>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
              <img
                src={hero3}
                className="d-block  hero-Img float-end"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
