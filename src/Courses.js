import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };
  const getRandomCourse = () => {
    let randomNumber = Math.floor(Math.random() * courses.length);

    if (index == randomNumber) {
      randomNumber = index + 1;
    }
    setIndex(checkIndex(randomNumber));
  };
  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <div className="courseMainDiv">
      <div className="courseTitle">
        <h2>Kurslarım</h2>
        <button onClick={getRandomCourse} className="cardButton">
          Rastgele Kurs Ata!
        </button>
      </div>
      <div className="cardDiv">
        <button onClick={prevCourse} className="prevNext">
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="carTitle">{title}</h2>
            <h4 className="cardPrice">{price} TL</h4>
          </div>
          <p>{content}</p>
        </div>
        <button onClick={nextCourse} className="prevNext">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Courses;
