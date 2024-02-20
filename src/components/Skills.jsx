import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum natus voluptas repellendus nihil eligendi ratione non fugiat, laudantium itaque ullam inventore rem similique est eos. Eveniet rerum officia enim libero?</p>
                    <Carousel responsive={responsive} infinite={true} className="skills-slider">
                        <div className="item1">
                        <img src=""alt=""></img>
                            <h5>Web Development1</h5>
                        </div>
                        <div className="item2">
                        <img src=""alt=""></img>
                            <h5>Web Development2</h5>
                        </div>
                        <div className="item3">
                        <img src=""alt=""></img>
                            <h5>Web Development3</h5>
                        </div>
                        <div className="item4">
                        <img src=""alt=""></img>
                            <h5>Web Development4</h5>
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
