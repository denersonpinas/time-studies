import React from "react";
import { Item } from "./Item";
import list from "./list.module.scss";

export function List() {

    const task = [
        {
            task: 'React',
            time: '02:00:00'
        },
        {
            task: 'Typescript',
            time: '01:30:00'
        },
        {
            task: 'Javacript',
            time: '02:30:00'
        }
    ]

    return (
        <aside className={list["aside-list"]}>
            <h2 className={list["sub-title"]}>Studies Now</h2>
            <ul className={list["list"]}>
                {task.map((item, index) => (    
                    <Item
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}