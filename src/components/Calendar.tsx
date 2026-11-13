//useState til at gemme lågerne og deres status.
//useEffect til at hente JSON-data, når kalenderen indlæses.
//useMemo sørger for, at lågerne kun blandes en gang, når doors bliver hentet. De beholder dermed deres placering, selvom brugeren åbner en låge.

import { useEffect, useState , useMemo } from "react";
import Door from "./Door";

import { loadDoors } from "../api/loadDoors";
import { getDoorStatus } from "../types/Calendar";

import type {
    CalendarDoor,
    CalendarProgress,
    doorStatus
} from "../types/Calendar";

type CalendarProps = {
    progress: CalendarProgress;
    today: string;
    onOpen: (day: number) => void;
};

export default function Calendar({
    progress,
    today,
    onOpen
}: CalendarProps) {

    const [doors, setDoors] = useState<CalendarDoor[]>([]);
    const [error, setError] = useState<string | null>(null);

    

    const shuffledDoors = useMemo(() => {
    return  [...doors.sort(() => Math.random()-0.5)];

    }, [doors]);




    useEffect(() => {

        async function fetchDoors() {
            try {
                const data = await loadDoors();
                setDoors(data);
            } catch (error) {
                setError("Kunne ikke hente julekalenderens låger.");
                console.error(error);
            }
        }

        fetchDoors();

    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    if (doors.length === 0) {
        return <p>Julekalenderen indlæses...</p>;
    }

    return (
        <section className="calendar">

            {shuffledDoors.map((door) => {

                const status: doorStatus = getDoorStatus(
                    door,
                    progress,
                    today
                );

                return (
                    <Door
                        key={door.day}
                        door={door}
                        status={status}
                        onOpen={onOpen}
                    />
                );
            })}

        </section>
    );
}