import { Col, Container, Row } from "react-bootstrap"
// import { ArrowRightCircle } from "react-bootstrap-icons"
import { useState, useEffect } from "react"
import Image from "../assets/Images/1699476215427.jpeg";

function Header () {
return (
<section className="header" id="home">
    <Container>
        <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my portfolio</span>
                <h1>Hi! I'm Matt</h1>
                <p>I'm an enthusiastic learner with a keen interest in graphic design and video editing, skills that I've honed through self-teaching. Currently delving into the world of Front End Web Development, I'm passionate about crafting digital experiences that are not only visually appealing but also user-friendly. My aspirations extend beyond the realm of code as I look forward to transitioning into UX/UI design—a field where I see my future unfolding. Being a creative soul, I thrive on feedback and enjoy engaging in conversations that spark innovative ideas and perspectives.</p>
                <a href="https://drive.google.com/file/d/1fbXKDSydTQJSFxIxQXdGgBbEVr7NM-R0/view?usp=sharing" target="_blank">
                <button>Read my CV here!
                </button>
                </a>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <img src={Image} alt="Header Image"></img>
            </Col>
        </Row>
    </Container>
</section>
    )}


export default Header;