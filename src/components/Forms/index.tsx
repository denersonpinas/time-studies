import React from "react";
import { Button } from "../Button";
import form from "./form.module.scss";

export class Form extends React.Component {
    render () {
        return(
            <form action="" className={form["form"]}>
                <div className={form["form__container"]}>
                    <label htmlFor="task" className={form["container__label"]}>Task</label>
                    <input 
                        className={form["container__input"]}
                        type="text"
                        name="Task"
                        id="task"
                        placeholder="What do you want to study?"
                        required/>
                </div>
                <div className={form["form__container"]}>
                    <label htmlFor="time" className={form["container__label"]}>Time</label>
                    <input
                        className={form["container__input"]}
                        type="time"
                        step="1"
                        name="Time"
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required/>
                </div>                
                <Button>
                    Adicionar
                </Button>
            </form>
        );
    }
}