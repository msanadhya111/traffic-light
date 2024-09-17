import { useState } from "react";

export const Todo = () => {
  const [activities, setActivities] = useState([]);
  const todoHandler = () => {
    const value = document.querySelector("#todoInput").value;
    setActivities((activity) => [...activity, value]);
    document.querySelector("#todoInput").value = "";
  };

  const deleteActivityHandler = (event) => {
    // console.log(event);
    const deleteActivity = event.target.id;
    setActivities((prevActivities) => {
      const updatedActivities = prevActivities.filter(
        (activity) => activity !== deleteActivity
      );
      return updatedActivities;
    });
  };

  const sortTodoActivities = () => {
    setActivities((activities) => {
      const sortedActivities = [...activities].sort();
      return sortedActivities;
    });
  };

  return (
    <>
      <input
        id="todoInput"
        type="text"
        style={{ width: "250px", height: "20px", fontSize: "larger" }}
      ></input>
      <button
        type="button"
        style={{
          width: "100px",
          height: "25px",
          marginLeft: "10px",
          fontSize: "larger",
        }}
        onClick={todoHandler}
      >
        Submit
      </button>
      {activities.length > 0 && (
        <p
          style={{ width: "100px", height: "15px" }}
          onClick={sortTodoActivities}
        >
          Todo Activites
        </p>
      )}
      {activities.map((activity) => {
        return (
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "180px",
                height: "22px",
                border: "1px solid",
                fontSize: "larger",
                backgroundColor: "lightblue",
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {activity}
            </div>
            <button
              id={activity}
              style={{ margin: "10px", width: "70px", height: "25px" }}
              onClick={deleteActivityHandler}
            >
              Delete Me
            </button>
          </div>
        );
      })}
    </>
  );
};
