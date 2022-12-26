import item from "./item.module.scss";

export function Item({task, time} : {task: string, time: string}) {
    return(
        <li className={item["list__item"]}>
            <h3 className="item-title">{task}</h3>
            <span className="item-time">{time}</span>
        </li>
    );
}