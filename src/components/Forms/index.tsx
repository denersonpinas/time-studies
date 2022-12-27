import React from "react";
import { ITask } from "../../types/tasks";
import { Button } from "../Button";
import form from "./form.module.scss";
import { v4 as uuidv4 } from 'uuid';

export class Form extends React.Component<{
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}> {

    state = {
        task: "",
        time: "00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // Aqui com o "lastTask" estamos informando que vamos retornar todas as tarefas antigas + as novas tasks inputadas
        this.props.setTask(lastTask => [
            ...lastTask,
            {
                ...this.state,
                select: false,
                complete: false,
                id: uuidv4()
            }
        ])

        // Reset
        this.setState ({
            task: "",
            time: "00:00"
        })
    }

    render () {
        return(
            <form action="" className={form["form"]} onSubmit={this.addTask.bind(this)}>
                <div className={form["form__container"]}>
                    <label htmlFor="task" className={form["container__label"]}>Task</label>
                    <input 
                        className={form["container__input"]}
                        type="text"
                        name="Task"
                        value={this.state.task}
                        onChange={(event) => {
                            this.setState({...this.state, task: event.target.value})
                        }}
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
                        value={this.state.time}
                        onChange={(event) => {
                            this.setState({...this.state, time: event.target.value})
                        }}
                        id="time"
                        min="00:00:00"
                        max="01:30:00"
                        required/>
                </div>                
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        );
    }
}