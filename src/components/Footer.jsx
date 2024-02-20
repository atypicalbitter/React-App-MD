import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



function Footer() {
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 2000, min: 2000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  return (
    <section className="footer" id="footer">
        <Container>
            <Row>
                <Col>
                <div className="footer-section">
                    <Carousel responsive={responsive} infinite={true} className="skills-slider">
                        <div className="item1">
                        <FontAwesomeIcon icon={faLinkedinIn} size="3x" />
                        </div>
                        <div className="item2">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                        </div>
                        <div className="item3">
                        <FontAwesomeIcon icon={faEnvelope} size="3x" />
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
  }
export default Footer;
