import React from 'react'

function SingleJob() {
  return (
    <div className='container bg-light my-3 p-2'>
        <div className='job-header'>
            <h2>React Js Developer</h2>
            <div className='job-header-sub'>
                <ul>
                    <li> 3-8 Yrs</li>
                    <li> 50,000 - 1,00,000</li>
                    <li> Pune, Banglore</li>
                </ul>
                <div className='job-head-buttons'>
                    <button className='btn btn-outline-primary'>Register To Apply</button>
                    <button className='btn btn-primary'>Apply To Job</button>
                </div>
            </div>
        </div>
        <div className='job-desc'>
            <h2>Job Description</h2>
            <h4>React Js Developer</h4>
            <p>Job Location : Pune Banglore</p>
            <div className='job-resp'>
                <h5>Responsibilities : </h5>
                <ul>
                    <li>Prior experience is not mandatory</li>
                    <li>Ability to quickly learn - PHP, MySQL, jQuery, Ajax, Git</li>
                    <li> Have familiarity with HTML, CSS, JS</li>
                    <li>Work closely with product managers and UI/UX designers to analyze requirements</li>
                    <li>Integrate the front-end UI with backend APIs</li>
                    <li>Work with the product team in prioritizing development activities for weekly sprints</li>
                </ul>
            </div>
            <div className='job-req'>
                <h5>Requirements :</h5>
                <p><span className='fw-bold'>Overall Experience</span> :- 3 to 9 years</p>
                <span className='fw-bold'>Mandatory Experience : </span>
                <p>Prior experience is not mandatory <br></br>
                   Ability to quickly learn - PHP, MySQL, jQuery, Ajax, Git</p>
                
            </div>
        </div>
    </div>
  )
}

export default SingleJob;