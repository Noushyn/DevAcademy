import "./Courses.css";
import MyNavbar from "../../components/navbar/Mynavbar";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Form } from "react-bootstrap";
import { FaSort } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import CourseItem from "../../components/course/CourseItem";
import Article from "../article/article";
import Alert from "react-bootstrap/Alert";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [sortType, setSortType] = useState("Oldest");
  const [category, setCategory] = useState("");
  const [courseState, setCourseState] = useState("");

  useEffect(() => {
    if (sortType == "Oldest") getCourseByOrder("id", "asc");
    if (sortType == "Newest") getCourseByOrder("id", "desc");
    if (sortType == "expensivest") getCourseByOrder("mainPrice", "desc");
    if (sortType == "cheapest") getCourseByOrder("mainPrice", "asc");
  }, [sortType]);

  useEffect(() => {
    if (category == "frontEnd") getCourseByCategory("فرانت اند");
    else if (category == "backEnd") getCourseByCategory("بک اند");
  }, [category]);

  useEffect(() => {
    if (courseState == "completed") getCourseByState("completed");
    else if (courseState == "presell") getCourseByState("presell");
    else if (courseState == "recording") getCourseByState("recording");
  }, [courseState]);


  const inputHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const BtnHandler = () => {
    axios
      .get(
        `http://localhost/react/api/courses/?search=${searchInput}&column=teacher`
      )
      .then((response) => setCourses(response.data.data));
  };

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const getCourseByOrder = (column, order) => {
    axios
      .get(
        `http://localhost/react/api/courses/?column=${column}&order=${order}`
      )
      .then((response) => setCourses(response.data.data));
  };

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const getCourseByCategory = (category) => {
    axios
      .get(`http://localhost/react/api/courses/?category=${category}`)
      .then((response) => setCourses(response.data.data));
  };

  const courseStateHandler = (e) => {
    setCourseState(e.target.value);
  };

  const getCourseByState = (state) => {
    axios
      .get(`http://localhost/react/api/courses/?state=${state}`)
      .then((response) => setCourses(response.data.data));
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection1">
          <h1>لیست دوره ها</h1>
          <div className="searchBox1">
            <input
              type="text"
              className="searchInput1"
              onChange={inputHandler}
            />
            <button className="searchBtn" onClick={BtnHandler}>
              جستجو
            </button>
          </div>
        </div>

        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort size="20px" />
                  <b>مرتب سازی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    {["radio"].map((type) => (
                      <div key={`default-${type}`} className="mb-3">
                        <Form.Check
                          type={type}
                          name={"select"}
                          id={"Newest"}
                          label={"جدیدترین"}
                          onChange={sortHandler}
                        />
                        <Form.Check
                          type={type}
                          name={"select"}
                          id={"Oldest"}
                          label={"قدیمی ترین"}
                          onChange={sortHandler}
                        />
                        <Form.Check
                          type={type}
                          name={"select"}
                          id={"expensivest"}
                          label={"گران ترین"}
                          onChange={sortHandler}
                        />
                        <Form.Check
                          type={type}
                          name={"select"}
                          id={"cheapest"}
                          label={"ارزان ترین"}
                          onChange={sortHandler}
                        />
                      </div>
                    ))}
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <div className="filterWrapper">
              <div className="filterIcon">
                <MdCategory />
                <b>دسته بندی</b>
              </div>
              <Form>
                <Form.Check
                  type="checkbox"
                  value="frontEnd"
                  label="فرانت اند"
                  onChange={categoryHandler}
                  checked={category == "frontEnd" ? true : false}
                />

                <Form.Check
                  type="checkbox"
                  value="backEnd"
                  label="بک اند"
                  onChange={categoryHandler}
                  checked={category == "backEnd" ? true : false}
                />
              </Form>
            </div>

            <div className="filterWrapper">
              <div className="filterIcon">
                <FaFilter />
                <b>وضعیت دوره</b>
              </div>

              <Form>
                <Form.Check
                  type="switch"
                  value="completed"
                  label="تکمیل شده"
                  onChange={courseStateHandler}
                  checked={courseState ==  "completed" ? true : false}
                />

                <Form.Check
                  type="switch"
                  value="presell"
                  label=" پیش فروش"
                  onChange={courseStateHandler}
                  checked={courseState == "presell" ? true : false}
                />

                <Form.Check
                  type="switch"
                  value="recording"
                  label="درحال ضبط"
                  onChange={courseStateHandler}
                  checked={courseState == "recording" ? true : false}
                />
              </Form>
            </div>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {courses.map((course) => (
                <Col key={course.id}>
                  <CourseItem {...course} />
                </Col>
              ))}
            </Row>
            {courses.length == 0 && (
              <Alert variant="warning" className="gy-4 py-3 mt-2">
                <p>دوره ای یافت نشد!!</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Courses;
