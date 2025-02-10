import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import CourseItem from "../../components/course/CourseItem";
import MyNavbar from "../../components/navbar/Mynavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer/foore";
import Hero from "../../components/hero/Hero";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SwiperButtons from "../../components/swiperButtons/SwiperButtons";
import "./home.css";

function Home() {
  const [articles, setArticles] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=6")
      .then((response) => setArticles(response.data.data));

    axios
      .get("http://localhost/react/api/courses/?page=1&limit=8")
      .then((response) => setCourses(response.data.data));
  }, []);
  return (
    <>
      <MyNavbar />
      <Hero />

      <Container>
        <Row className="py-4">
          <Swiper
            className="customSwiperStyle"
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 1,
              },
            }}
            modules={[Autoplay]}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">جدیدترین دوره ها</h2>
              <SwiperButtons />
            </div>

            {courses.map((course) => (
              <SwiperSlide>
                <Col key={course.id}>
                  <CourseItem {...course} />
                </Col>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>

        <Row className="py-3">
          <Swiper
            className="customSwiperStyle"
            spaceBetween={30}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 1,
              },
            }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">جدیدترین مقالات</h2>
              <SwiperButtons />
            </div>

            {articles.map((article) => (
              <SwiperSlide key={article.id}>
                <ArticleItem {...article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
      <Footer />
    </>
  );
}
export default Home;
