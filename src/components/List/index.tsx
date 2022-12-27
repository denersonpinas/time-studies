import { ITask } from "../../types/tasks";
import { Item } from "./Item";
import list from "./list.module.scss";

interface Props {
    task: ITask[],
    selectTask: (TaksSelecting:ITask) => void 
}

export function List({task, selectTask} : Props) {

    return (
        <aside className={list["aside-list"]}>
            <h2 className={list["sub-title"]}>
                Studies Now
            </h2>
            <ul className={list["list"]}>
                {task.map((item) => (    
                    <Item
                        key={item.id}
                        {...item}
                        selectTask={selectTask}
                    />
                ))}
            </ul>
        </aside>
    );
}