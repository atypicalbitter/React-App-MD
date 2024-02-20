import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faFigma, faGithub, faNode } from '@fortawesome/free-brands-svg-icons';


function Skills() {
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 2000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skills-ection">
                    <h2>Skills</h2>
                    <p>Here is a list of some of the skills that I have </p>
                    <Carousel responsive={responsive} infinite={true} className="skills-slider">
                        <div className="item1">
                        <FontAwesomeIcon icon={faHtml5} size="5x" />
                        </div>
                        <div className="item2">
                        <FontAwesomeIcon icon={faCss3Alt} size="5x" />
                        </div>
                        <div className="item3">
                        <FontAwesomeIcon icon={faJs} size="5x" />
                        </div>
                        <div className="item4">
                        <FontAwesomeIcon icon={faReact} size="5x" />
                        </div>
                        <div className="item5">
                        <FontAwesomeIcon icon={faFigma} size="5x" />
                        </div>
                        <div className="item6">
                        <FontAwesomeIcon icon={faGithub} size="5x" />
                        </div>
                        <div className="item7">
                        <FontAwesomeIcon icon={faNode} size="5x" />
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
  }
export default Skills;
