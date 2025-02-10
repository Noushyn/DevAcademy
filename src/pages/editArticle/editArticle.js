import Form from "react-bootstrap/Form";
import MyNavbar from "../../components/navbar/Mynavbar";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Swal from "sweetalert2";

function EditArticle() {
  const articleId1 = useParams().articleId;
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost/react/api/articles/?id=${articleId1}`)
      .then((response) => setArticleData(response.data.data[0]));
  }, []);

  const editArticleHandler = () => {
    axios
      .put(`http://localhost/react/api/articles/?id=${articleId1}`, articleData)
      .then(() => {
        Swal.fire({
          title: "مقاله با موفقیت ویرایش شد",
          timer: 1500,
          timerProgressBar: true,
          showConfirmButton: false,
        });
      })
      .catch((error) => {
        console.error("Error updating article:", error);
        Swal.fire({
          title: "خطا در ویرایش مقاله",
          text: "لطفاً مجدداً تلاش کنید.",
          icon: "error",
        });
      });
  };

  const formHandler = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formHandler}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
              value={articleData.description}
              name="description"
              onChange={formHandler}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> نویسنده مقاله</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> موضوع مقاله</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formHandler}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> عکس مقاله</Form.Label>
            <Form.Control
              value={articleData.image}
              name="image"
              onChange={formHandler}
              type="text"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> مدت زمان خواندن</Form.Label>
            <Form.Control
              value={articleData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
            />
          </Form.Group>

          <Button onClick={editArticleHandler} variant="primary" type="button">
            ویرایش مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
