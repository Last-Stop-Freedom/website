import React from 'react';
import Logo from './logo.svg'
import {Link} from 'react-router-dom'

let link = 'https://us02web.zoom.us/j/87994984765'
let linkProps = { target: "_blank", rel: "noopener noreferrer" }

function App() {
  return (
    <div className="App">
      <Link to = "/meeting-guide" className="meetingguidelink"> 
      MEETING GUIDE
      </Link>
      <header className="App-header">
        <img src={Logo} alt="logo" />
        <p>
          LAST STOP: FREEDOM
        </p>
        <hr
          style={{
            width: '35vw',
            opacity: 0.5,
            marginBottom: 20
          }}
        />
        <em>There is a solution.</em>
        <div className="info">
          <p>Last Stop: Freedom is a group of alcoholics who meet once a
        week to discuss the program of recovery described in the book Alcoholics Anonymous.</p>
          <p>The meeting is currently being held every <b>Sunday @ 7:30pm EST</b>, online using Zoom.</p>

          <p><a href={link} {...linkProps}>Click here to join the meeting</a> or enter the Meeting ID below into Zoom.</p>
          <p>Zoom Meeting ID: 87994984765</p>
        </div>
      </header>
    </div>
  );
}

export default App;
