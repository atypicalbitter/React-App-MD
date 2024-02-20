import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import React from 'react';

function MyProjects() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="tab-example"
      className="mb-3"
      justify
    >

    <Tab eventKey="1" title="Daily Assistant Application">
      <h2>Group project that I created as part of a team for my edX Front End Web Dev Course.</h2>
      <a href="https://github.com/atypicalbitter/edX-Group-Project" target="_blank" rel="noopener noreferrer">
      <h4>Link to GitHub Repo</h4></a>
      <a href="https://bena251.github.io/Bootcamp-Group-Project/" target="_blank" rel="noopener noreferrer">
        <img src='src/assets/Images/DailyAssistant.png' alt="Project Image" /></a>
      </Tab>

      <Tab eventKey="2" title="Password Generator">
      <h2>Web based Password Generator created with JS</h2>
      <a href="https://github.com/atypicalbitter/Password-Generator-MD" target="_blank" rel="noopener noreferrer">
      <h4>Link to GitHub Repo</h4></a>
      <a href="https://atypicalbitter.github.io/Password-Generator-MD/" target="_blank" rel="noopener noreferrer">
        <img src='src/assets/Images/PWG.png' alt="Project Image" /></a>
      </Tab>

    </Tabs>
    
  );
}

export default MyProjects;


