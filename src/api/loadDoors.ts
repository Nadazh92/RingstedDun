
import type { CalendarDoor } from "../types/Calendar";

export async function loadDoors(): Promise<CalendarDoor[]> {
    const res = await fetch("/data/doors.json");
    if (!res.ok) {
        throw new Error(`Could not load doors.json (${res.status})`)
    }

    const data: unknown = await res.json();

    if (!Array.isArray(data)) {
        throw new Error(`doors.json must be an array`);
    }

    return data as CalendarDoor[];

}
