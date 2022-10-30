import React, { Component } from "react";
import Marquee from "react-fast-marquee";
import Adani from "./Images/Recruiters/Adani.png";
import Capgemeni from "./Images/Recruiters/Capgemeni.png";
import Cognizant from "./Images/Recruiters/Cognizant.png";
import IBM from "./Images/Recruiters/IBM.png";
import Infosys from "./Images/Recruiters/Infosys.png";
import Amazon from "./Images/Recruiters/Amazon.png";
import Mahindra from "./Images/Recruiters/Mahindra.png";
import Microsoft from "./Images/Recruiters/Microsoft.png";
import NVIDIA from "./Images/Recruiters/NVIDIA.png";
import Persistent from "./Images/Recruiters/Persistent.png";
import TCS from "./Images/Recruiters/TCS.png";
import Wipro from "./Images/Recruiters/Wipro.png";
export class Recruiters extends Component {
  render() {
    const imgStyle = { marginLeft: "50px" };
    return (
      <div className="recruiters">
        <h2 className="tittle">Top Recruiters</h2>
        <Marquee>
          <img src={Adani} style={imgStyle} alt="" srcset="" height="90px" />
          <img
            src={Capgemeni}
            style={imgStyle}
            alt=""
            srcset=""
            height="60px"
          />
          <img
            src={Cognizant}
            style={imgStyle}
            alt=""
            srcset=""
            height="60px"
          />
          <img src={IBM} style={imgStyle} alt="" srcset="" height="60px" />
          <img src={Infosys} style={imgStyle} alt="" srcset="" height="60px" />
          <img src={Amazon} style={imgStyle} alt="" srcset="" height="90px" />
          <img src={Mahindra} style={imgStyle} alt="" srcset="" height="60px" />
          <img
            src={Microsoft}
            style={imgStyle}
            alt=""
            srcset=""
            height="80px"
          />
          <img src={NVIDIA} style={imgStyle} alt="" srcset="" height="60px" />
          <img
            src={Persistent}
            style={imgStyle}
            alt=""
            srcset=""
            height="60px"
          />
          <img src={TCS} style={imgStyle} alt="" srcset="" height="60px" />
          <img src={Wipro} style={imgStyle} alt="" srcset="" height="80px" />
        </Marquee>
      </div>
    );
  }
}

export default Recruiters;
