import { useEffect, useState } from "react";
import MyNavbar from "../../components/navbar/Mynavbar";
import "./Articles.css";
import { Row, Container, Col } from "react-bootstrap";
import axios from "axios";
import ArticleItem from "../../components/article/ArticleItem";
import { Accordion } from "react-bootstrap";
import { FaSort } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { Form } from "react-bootstrap";
import { Alert } from "react-bootstrap";

function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("Latest");
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    if (sortType == "Newest") getArticlesByOrder("desc", "id");
    else if (sortType == "Latest") getArticlesByOrder("asc", "id");
    else if (sortType == "Shortest") getArticlesByOrder("asc", "readingTime");
    else if (sortType == "Longest") getArticlesByOrder("desc", "readingTime");
  }, [sortType]);

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const getArticlesByOrder = (order, id) => {
    axios
      .get(`http://localhost/react/api/articles/?order=${order}&column=${id}`)
      .then((response) => setArticles(response.data.data));
  };

  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const searchButtonHandler = () => {
    axios
      .get(
        `http://localhost/react/api/articles/?search=${searchKey}&column=writter`
      )
      .then((response) => setArticles(response.data.data));
  };

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست مقالات</h1>
          <div className="searchBoxContainer">
            <input
              type="text"
              className="searchInput"
              onChange={searchInputHandler}
            />
            <button className="searchButton" onClick={searchButtonHandler}>
              جستجو
            </button>
          </div>
        </div>

        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion alwaysOpen className="py-3">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <FaSort size="20px" />
                  <b>مرتب سازی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      type="radio"
                      id="Newest"
                      name="sort"
                      label="جدیدترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="Latest"
                      name="sort"
                      label="قدیمی ترین"
                      onChange={sortHandler}
                    />

                    <Form.Check
                      type="radio"
                      id="Shortest"
                      name="sort"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />

                    <Form.Check
                      type="radio"
                      id="Longest"
                      name="sort"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <MdCategory size="20px" />
                  <b>دسته بندی</b>
                </Accordion.Header>
                <Accordion.Body>
                  <p>دسته بندی مقالات</p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4 py-3">
              {articles.map((article) => (
                <Col key={article.id}>
                  <ArticleItem {...article} />
                </Col>
              ))}
            </Row>
            {articles.length == 0 && (
              <Alert variant="warning" className="py-3 gy-4 mt-2">
                <p>مقاله ای یافت نشد!!!</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Articles;
