export function getDoorStatus(day: number, date: string): string {
    if(today < date){
        return "locked";
    }
    if(doorsOpened.includes(day)){
        return "opened";
    }
    return "available";
}
