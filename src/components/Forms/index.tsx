import React, { useState } from "react";
import { ITask } from "../../types/tasks";
import { Button } from "../Button";
import form from "./form.module.scss";
import { v4 as uuidv4 } from 'uuid';

interface Props {
    setTask: React.Dispatch<React.SetStateAction<ITask[]>>
}

export function Form({ setTask } : Props) {

    const [task, setTasks] = useState("");
    const [time, setTimes] = useState("00:00");

    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // Here with the "lastTask" we are informing that we will return all the old tasks + the new tasks inputted
        setTask(lastTask => 
            [
                ...lastTask,
                {
                    task,
                    time,
                    select: false,
                    complete: false,
                    id: uuidv4()
                }
            ]
        )

        // Reset
        setTasks("");
        setTimes("00:00")
    }

    return(
        <form action="" className={form["form"]} onSubmit={addTask}>
            <div className={form["form__container"]}>
                <label htmlFor="task" className={form["container__label"]}>Task</label>
                <input 
                    className={form["container__input"]}
                    type="text"
                    name="Task"
                    value={task}
                    onChange={(event) => setTasks(event.target.value)}
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
                    value={time}
                    onChange={(event) => setTimes(event.target.value)}
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


// export class Form1 extends React.Component<{
//     setTask: React.Dispatch<React.SetStateAction<ITask[]>>
// }> {

//     state = {
//         task: "",
//         time: "00:00"
//     }

//     addTask(event: React.FormEvent<HTMLFormElement>) {
//         event.preventDefault();
//         // Aqui com o "lastTask" estamos informando que vamos retornar todas as tarefas antigas + as novas tasks inputadas
//         this.props.setTask(lastTask => [
//             ...lastTask,
//             {
//                 ...this.state,
//                 select: false,
//                 complete: false,
//                 id: uuidv4()
//             }
//         ])

//         // Reset
//         this.setState ({
//             task: "",
//             time: "00:00"
//         })
//     }

//     render () {
//         return(
//             <form action="" className={form["form"]} onSubmit={this.addTask.bind(this)}>
//                 <div className={form["form__container"]}>
//                     <label htmlFor="task" className={form["container__label"]}>Task</label>
//                     <input 
//                         className={form["container__input"]}
//                         type="text"
//                         name="Task"
//                         value={this.state.task}
//                         onChange={(event) => {
//                             this.setState({...this.state, task: event.target.value})
//                         }}
//                         id="task"
//                         placeholder="What do you want to study?"
//                         required/>
//                 </div>
//                 <div className={form["form__container"]}>
//                     <label htmlFor="time" className={form["container__label"]}>Time</label>
//                     <input
//                         className={form["container__input"]}
//                         type="time"
//                         step="1"
//                         name="Time"
//                         value={this.state.time}
//                         onChange={(event) => {
//                             this.setState({...this.state, time: event.target.value})
//                         }}
//                         id="time"
//                         min="00:00:00"
//                         max="01:30:00"
//                         required/>
//                 </div>                
//                 <Button type="submit">
//                     Adicionar
//                 </Button>
//             </form>
//         );
//     }
// }