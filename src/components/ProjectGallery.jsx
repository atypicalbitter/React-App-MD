import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src='src/assets/Images/IMG1.png'></img>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard;

// import React from 'react';
// import Project from './Projects'; 

// import projectsData from '../assets/data/projectsData.json';

// function ProjectGallery() {
//   return (
//     <div>
//       {projectsData.map((project, index) => (
//         <Project key={index} {...project} />
//       ))}
//     </div>
//   );
// }

// export default ProjectGallery;


// import React from 'react';
// import Project from './Projects';
// import { Link } from 'react-router-dom'; // Import Link

// import projectsData from '../assets/data/projectsData.json';

// function ProjectGallery() {
//   return (
//     <div>
//       {projectsData.map((project, index) => (
//         <Link key={index} to={`/project/${project.title}`} style={{ textDecoration: 'none' }}>
//           {/* Wrap each project card with Link */}
//           <Project {...project} />
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default ProjectGallery;
