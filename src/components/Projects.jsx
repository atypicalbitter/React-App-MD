import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


function MyProjects() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="1" title="Project 1">
        <h2>This is my first project</h2>
<img src='src/assets/Images/IMG1.png'></img>
      </Tab>
      <Tab eventKey="2" title="Project 2">
      <h2>This is my second project</h2>
<img src='src/assets/Images/IMG2.png'></img>
      </Tab>
      <Tab eventKey="3" title="Project 3">
      <h2>This is my third project</h2>
<img src='src/assets/Images/IMG3.png'></img>
      </Tab>
      <Tab eventKey="4" title="Project 4">
      <h2>This is my fourth project</h2>
<img src='src/assets/Images/IMG4.png'></img>
      </Tab>

    </Tabs>
  );
}

export default MyProjects;