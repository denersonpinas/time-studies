import { Button } from "../Button";
import { Watch } from "./Watch";
import stopwatch from "./stopwatch.module.scss";
import { ITask } from "../../types/tasks";
import { useEffect, useState } from "react";
import { timeToSecond } from "../../common/utils/time";

interface Props {
    select: ITask | undefined,
    endTask: () => void
}

export function Stopwatch({select, endTask}: Props) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(select?.time) {
            setTime(timeToSecond(select.time))
        }
    }, [select]);

    // Fuction recursive in stopwatch
    function regressive(counter: number = 0) {
        setTimeout(() => {
            if(counter > 0) {
                setTime(counter - 1);
                return regressive(counter - 1)
            }
            endTask();
        }, 1000);
    }

    return (
        <div className={stopwatch["section-Stopwatch"]}>
            <h2 className={stopwatch["stopwatch_title"]}>
                Select single card and start this Stopwatch
            </h2>
            <div className={stopwatch["stopwatch_watch"]}>
                <Watch time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Start!
            </Button>
        </div>
    );
}