export function timeToSecond(time: string) {
    const [hour = '0', minute = '0', second = '0'] = time.split(":")

    const hourAndSecond = Number(hour) * 3600;
    const minuteAndSecond = Number(minute) * 60;
    return hourAndSecond + minuteAndSecond + Number(second);
}