import { ITask } from "../../../types/tasks";
import item from "./item.module.scss";

interface Props extends ITask {
    selectTask: (TaksSelecting:ITask) => void 
}

export function Item(
    {
        task, 
        time, 
        select, 
        complete, 
        id,
        selectTask
    } : Props) {
    return(
        <li 
            className={`${item["list__item"]} ${select ? item["list__item-select"] : ''}`}
            onClick={() => selectTask({
                task,
                time,
                select,
                complete,
                id
            })}
        >
            <h3 className="item-title">{task}</h3>
            <span className="item-time">{time}</span>
        </li>
    );
}