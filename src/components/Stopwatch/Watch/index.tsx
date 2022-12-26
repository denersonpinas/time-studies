import watch from "./watch.module.scss";

export function Watch() {
    return (
        <>
        <span className={watch["watch_pointer"]}>0</span>
        <span className={watch["watch_pointer"]}>0</span>
        <span className={watch["watch_division"]}>:</span>
        <span className={watch["watch_pointer"]}>0</span>
        <span className={watch["watch_pointer"]}>0</span>
        </>
    );
}