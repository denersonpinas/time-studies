import React, { useState } from "react";
import { Form } from "../components/Forms";
import { List } from "../components/List";
import { Stopwatch } from "../components/Stopwatch";
import { ITask } from "../types/tasks";
import app from "./app.module.scss";

export function App() {

  const [task, setTask] = useState<ITask[]>([])

  const [select, setSelect] = useState<ITask>();

  function SelectTask(TaksSelecting: ITask) {
    setSelect(TaksSelecting);
    setTask(lastTask => lastTask.map(tasks => ({
      ...tasks,
      select: tasks.id === TaksSelecting.id ? true : false
    })));
  }

  return (
    <div className={app["app"]}>
      <div className={app["app_column"]}>
        <Form setTask={setTask}/>
        <Stopwatch select={select} />
      </div>
      <List 
        task={task}
        selectTask={SelectTask}
      />
    </div>
  )
}