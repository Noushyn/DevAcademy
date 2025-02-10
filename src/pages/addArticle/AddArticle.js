import MyNavbar from "../../components/navbar/Mynavbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Addarticle.css";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


function AddArticle() {

const resetFormData = ()=>{
setFormData({
  title : "",
  description : "",
  category : "",
  writter : "",
  image : "",
  readingTime : "",
})

}



  const addArticleHandler = () => {
    axios
      .post("http://localhost/react/api/articles/", formData)
      .then((response) => {
        if (response.status === 200)
          Swal.fire({
            title: "مقاله جدید با موفقیت ساخته شد",
            timer: 1500,
            timerProgressBar: true,
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "مقاله ساخته نشد",
          timer: 1500,
          icon: "error",
          timerProgressBar: true,
        });
      });
      resetFormData();
  };

  const [formData, setFormData] = useState({});

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <MyNavbar />
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>عنوان مقاله</Form.Label>
            <Form.Control
            value={formData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="عنوان مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>توضیح کوتاه</Form.Label>
            <Form.Control
            value={formData.description}
              name="description"
              onChange={formHandler}
              type="text"
              placeholder="یک توضیح کوتاه درمورد مقاله وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> نویسنده مقاله</Form.Label>
            <Form.Control
            value={formData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="نام نویسنده مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> موضوع مقاله</Form.Label>
            <Form.Control
            value={formData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="موضوع مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> عکس مقاله</Form.Label>
            <Form.Control
            value={formData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="آدرس عکس مقاله را وارد کنید"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label> مدت زمان خواندن</Form.Label>
            <Form.Control
            value={formData.readingTime}
              name="readingTime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>

          <Button onClick={addArticleHandler} variant="primary" type="button">
            ساخت مقاله
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddArticle;
