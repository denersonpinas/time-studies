import React from "react";
import { Form } from "../components/Forms";
import { List } from "../components/List";
import { Stopwatch } from "../components/Stopwatch";
import app from "./app.module.scss";

export function App() {
  return (
    <div className={app["app"]}>
      <div className={app["app_column"]}>
        <Form/>
        <Stopwatch/>
      </div>
      <List/>
    </div>
  )
}