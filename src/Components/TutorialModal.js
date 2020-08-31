import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

export default function TutorialModal(props) {
  console.log(props);
  const sliderArr = [1, 2, 3, 4, 5];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };
  const goToSlide = (event) => {
    // setX(this.index * -100);
    setX(event.target.className.charAt(0) * -100);
  };

  return (
    <div className="tutorial-container" style={{ display: props.display }}>
      <div className="inner-tutorial-container">
        <div className="slider-container">
          <div>
            <Fab id="goLeft" onClick={goLeft}>
              <ChevronLeftIcon />
            </Fab>
          </div>
          <div className="slider">
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>Welcome to BadASS Kanban</h1>
              <img className="tutorial-img" src="welcome.png" alt="welcome" />
              <p>Let's Get Started</p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>How to create a new task</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="add-task.mp4" type="video/mp4" />
                <source src="add-task.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p>
                1. Click on the + button at the bottom of a column <br /> 2. Add
                a title, and an optional description and image <br /> 3. Click
                the Add Task Button
              </p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>How to add a column</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="create-column.mp4" type="video/mp4" />
                <source src="create-column.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p>
                1. Click on the + button to the right of the last column
                <br /> 2. Add Add a column title <br /> 3. Press Enter
              </p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>Dragging</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="dragging.mp4" type="video/mp4" />
                <source src="dragging.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p>
                You can drag tasks within a column, drag tasks between columns,
                and drag the columns themselves
                <br />
              </p>
            </div>
          </div>
          <div>
            <Fab id="goRight" onClick={goRight}>
              <ChevronRightIcon />
            </Fab>
          </div>
        </div>
        <div className="dots-container">
          {sliderArr.map((item, index) => {
            return (
              <span
                key={index}
                className={`${index} circle ${
                  index * -100 === x ? "active" : "null"
                }`}
                onClick={goToSlide}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}
