"use client";
import React, { useState } from "react";
import createTask from "../(utils)/createTask";
interface NewTask {
  title: string;
  priority: number;
  description: string;
  isCompleted: boolean;
  deadlineAt: Date;
}

const QuickAddATaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [group, setGroup] = useState("");
  const handleSubmit = async () => {
    console.log(title, description, location, priority, time, group);
    const newTask: NewTask = {
      title: title,
      priority: priority,
      description: description,
      isCompleted: false,
      deadlineAt: time,
    };
    const result = await createTask(newTask);
    if (result) console.log("success");
    else console.log("failure");
  };
  return (
    <div>
      <div>
        <form>
          <label>
            <input
              id="title"
              type="text"
              placeholder="Type a Task"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label>
            <input
              type="text"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
          <label>
            <span onClick={() => setTime(new Date())}>Set time</span>
          </label>
          <label>
            <span onClick={() => setPriority(1)}>1</span>
            <span onClick={() => setPriority(2)}>2</span>
            <span onClick={() => setPriority(3)}>3</span>
            <span onClick={() => setPriority(4)}>4</span>
          </label>
          <label>
            <span onClick={() => setGroup("Home")}>Home</span>
            <span onClick={() => setGroup("Routine")}>Routine</span>
            <span onClick={() => setGroup("Inspiration")}>Inspiration</span>
          </label>
          <span onClick={handleSubmit}>Submit</span>
        </form>
      </div>
    </div>
  );
};

export default QuickAddATaskForm;
