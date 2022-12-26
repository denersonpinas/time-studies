import { Button } from "../Button";
import { Watch } from "./Watch";
import stopwatch from "./stopwatch.module.scss";

export function Stopwatch() {
    return (
        <div className={stopwatch["section-Stopwatch"]}>
            <h2 className={stopwatch["stopwatch_title"]}>
                Select single card and start this Stopwatch
            </h2>
            <div className={stopwatch["stopwatch_watch"]}>
                <Watch/>
            </div>
            <Button>
                Start!
            </Button>
        </div>
    );
}