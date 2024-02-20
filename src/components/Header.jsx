import { Col, Container, Row } from "react-bootstrap"
// import { ArrowRightCircle } from "react-bootstrap-icons"
import { useState, useEffect } from "react"

function Header () {
    const [loopNum, setLoopNum] = useState(0);
    const[isDeleting, setIsDeleting] = useState(false);
    const rotate = ["Web Developer", "UX/UI Designer"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random()* 100);

    useEffect(() => {
        let ticker = setInterval (() => {
            ticker();
        },delta)
        return () => {clearInterval(ticker)};
        }, [text])

        const tick = () => {
            let i = loopNum % rotate.length;
            let fullText = rotate[i];
            let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring (0, text.length +1)

        setText (updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setdelta(500);
            }
        
        }
return (
<section className="header" id="home">
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfolio</span>
                <h1>{`Hi! I'm Matt`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta deleniti dolores itaque asperiores dolor nemo deserunt placeat aut ducimus similique commodi, amet voluptatibus veniam laudantium porro necessitatibus eligendi tempora esse!</p>
                <button onClick={() => console.log('connect')}>Let's connect
                </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src='src/assets/Images/HeaderImage.png' alt="Header Image"></img>
            </Col>
        </Row>
    </Container>
</section>
    )}


export default Header;