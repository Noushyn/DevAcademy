import "./CourseItem.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { FaDollarSign } from "react-icons/fa6";

function CourseItem(props) {
  return (
    <div className="courseCardWrapper">
      <div className="courseCardImage">
        <img src={props.image} />
        <p>
          <FaUsers size="20px" />
          <span>{props.studentCount}</span>
        </p>
      </div>
      <div className="courseCardContent">
        <h5 className="courseName">{props.title}</h5>
        <p className="courseDescription">{props.description}</p>
      </div>
      <div className="courseCardTeacher">
      <GiTeacher size='25px' />
      مدرس : {props.teacher}
      </div>
      <div className="courseCardFooter">
        <p>
          <button><b>ثبت نام دوره</b></button>
        </p>
        <p>
        <FaDollarSign size='25px' />
        <b>{props.mainPrice}</b>
        </p>
      </div>
    </div>






    // <Card className="w-100">
    //   <Card.Img variant="top" src={props.image} />
    //   <Card.Body>
    //     <Card.Title>{props.title}</Card.Title>
    //     <Card.Text>{props.description}</Card.Text>
    //     <div className="teacherName">
    //       <FaChalkboardTeacher size={"20px"} />
    //       <b>مدرس : {props.teacher}</b>
    //     </div>
    //   </Card.Body>
    //   <Card.Footer>
    //     <Button className="my-2" variant="primary">
    //       ثبت نام دوره
    //     </Button>
    //     <b>{props.mainPrice}</b>
    //   </Card.Footer>
    // </Card>
  );
}
export default CourseItem;
