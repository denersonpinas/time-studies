import watch from "./watch.module.scss";

interface Props {
    time: number | undefined
}

export function Watch({time = 0} : Props) {

    const minute = Math.floor(time / 60);
    const second = time % 60;

    const [minuteTen, minuteUnit] = String(minute).padStart(2,'0');
    const [secondTen, secondUnit] = String(second).padStart(2, '0');
    return (
        <>
        <span className={watch["watch_pointer"]}>{minuteTen}</span>
        <span className={watch["watch_pointer"]}>{minuteUnit}</span>
        <span className={watch["watch_division"]}>:</span>
        <span className={watch["watch_pointer"]}>{secondTen}</span>
        <span className={watch["watch_pointer"]}>{secondUnit}</span>
        </>
    );
}