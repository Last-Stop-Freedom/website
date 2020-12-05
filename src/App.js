import React from 'react';
import Logo from './logo.svg'

let link = 'https://us02web.zoom.us/j/87994984765'
let linkProps = { target: "_blank", rel: "noopener noreferrer" }

let morningMeditationLink = 'https://us02web.zoom.us/j/84780707410'

function App() {
  return (
    <div className="App">
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
        <hr
          style={{
            width: '30vw',
            opacity: 0.4,
            marginBottom: 10
          }}
        />
        <div className="info">
          <p className="broad-highway">
            THE BROAD HIGHWAY
          </p>
          <p>Step 11 Morning Meditation <b>Monday to Friday @ 6:00am - 6:30am EST</b>, online using Zoom.</p>

          <p><a href={morningMeditationLink} {...linkProps}>Click here to join the meeting</a> or enter the Meeting ID below into Zoom.</p>
          <p>Zoom Meeting ID: 84780707410</p>
          <p>Passcode: 233125</p>
        </div>
      </header>
    </div>
  );
}

export default App;
