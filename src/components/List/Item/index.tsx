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
            className={`${item["list__item"]} ${select ? item["list__item-select"] : ''} ${complete ? item["list__item-complete"] : ''}`}
            onClick={() => !complete && selectTask({
                task,
                time,
                select,
                complete,
                id
            })}
        >
            <div className={item["item_content"]}>
                <h3 className="content-title">{task}</h3>
                <span className="content-time">{time}</span>
            </div>
            
            {/* Conditional rendering --> We can render something if it's true */
            complete && <i className="fa-solid fa-circle-check"></i>}
        </li>
    );
}