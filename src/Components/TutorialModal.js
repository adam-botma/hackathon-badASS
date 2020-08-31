import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";

export default function TutorialModal(props) {
  const sliderArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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
              <p style={{ padding: "1%" }}>
                1. Click on the + button at the bottom of a column <br /> 2. Add
                a title. You can also add an optional description and image.{" "}
                <br /> 3. Click the "Add Task" button.
              </p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>Editing a task</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="editing.mp4" type="video/mp4" />
                <source src="editing.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p style={{ padding: "1%" }}>
                To edit a task, just click on the task you want to change and
                update whatever information necessary. Then, you can simply
                click out of the modal.
                <br />
              </p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>How to add a column</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="create-column.mp4" type="video/mp4" />
                <source src="create-column.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p style={{ padding: "1%" }}>
                1. Click on the + button to the right of the last column
                <br /> 2. Add a column title <br /> 3. Press "Enter".
              </p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>How to edit the project name or any column name</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="edit-project-column.mp4" type="video/mp4" />
                <source src="edit-project-column.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p style={{ padding: "1%" }}>
                To edit your project name or any column name, simply hover over
                it and click the edit icon. Update the name and click "Apply".
              </p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>Deleting</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="deleting.mp4" type="video/mp4" />
                <source src="deleting.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p style={{ padding: "1%" }}>
                You can delete a single task by clicking on it and then clicking
                on the trash can icon.
                <br />
                You can also delete an entire column by hovering over the column
                name and clicking the trash can icon. If you try to delete a
                column, you will get a warning stating that you will also delete
                all of the tasks within it.
              </p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>Dragging</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="dragging.mp4" type="video/mp4" />
                <source src="dragging.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p style={{ padding: "1%" }}>
                You can drag tasks within a column, drag tasks between columns,
                and drag the columns themselves.
                <br />
              </p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>Completing Tasks</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="completing.mp4" type="video/mp4" />
                <source src="completing.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p style={{ padding: "1%" }}>
                When you put a task into the complete column, your progress bar
                will fill up and you'll be rewarded with confetti!
                <br />
              </p>
            </div>
            <div className="slide" style={{ transform: `translateX(${x}%)` }}>
              <h1>Rewards</h1>
              <video className="tutorial-img" loop autoPlay muted>
                <source src="level-up.mp4" type="video/mp4" />
                <source src="level-up.mp4" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
              <p style={{ padding: "1%" }}>
                For every 5 tasks you finish, you level up and gain a badge!
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
          <Button
            className="tutorial-button"
            variant="contained"
            onClick={props.toggleTutorial}
          >
            I got it
          </Button>
        </div>
      </div>
    </div>
  );
}
