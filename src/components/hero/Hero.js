import { Container, Row, Col } from "react-bootstrap";
import "./Hero.css";
import heroImage from "../../assets/images/hero.svg";
import HeroBox from "../heroBox/HeroBox";
import { useEffect, useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { FaCode } from "react-icons/fa";
import { BsFillSkipStartFill } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css'


function Hero() {
useEffect(()=>{
AOS.init()
} , [])

  return (
    <>
      <div className="heroContainer">
        <Container>
          <Row>
            <Col className="col-12 col-md-6" data-aos="fade-left">
              <img src={heroImage} className="heroImg img-fluid" />
            </Col>
            <Col className="col-12 col-md-6" data-aos="fade-right">
              <h2 className="heroTitle">آمارها باعث افتخار ما هستند</h2>
              <Row className="justify-content-center row-cols-1 row-cols-xl-2 gy-4">
                <Col>
                  <HeroBox title="تعداد دانشجو" count="3500">
                    <FaUserAlt size="40px"/>
                  </HeroBox>
                </Col>
                <Col>
                <HeroBox title="تعداد مقاله" count="690">
                    <MdArticle  size="40px" />
                  </HeroBox>
                </Col>
                <Col>
                <HeroBox title="تعداد دوره" count="19">
                    <ImBooks  size="40px" />
                  </HeroBox>
                </Col>
                <Col>
                <HeroBox title=" پروژه موفق" count="15">
                    <FaCode size="40px" />
                  </HeroBox>
                </Col>
              </Row>
                <p className="startLearning"> 
                    <b>شروع آموزش</b>
                    <BsFillSkipStartFill size={'40px'} />
                </p>
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#eee"
          d="m0 224 40-32c40-32 120-96 200-106.7C320 75 400 117 480 160s160 85 240 64S880 117 960 85.3C1040 53 1120 75 1200 80s160-5 200-10.7l40-5.3V0H0Z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
