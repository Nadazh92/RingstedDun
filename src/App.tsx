

import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";


//import { getTodayDate } from "./types/Calendar";

import type { CalendarProgress } from "./types/Calendar";
import DoorsContent from "./components/DoorsContent";
import type { CalendarDoor } from "./types/Calendar";

function App() {

   // const today = getTodayDate();
   const today = "2026-12-03"; // Hardcoded date for testing purposes

    const [progress, setProgress] = useState<CalendarProgress>({
        openedDoors: [],
        lastOpenedDate: null 
    });

    const [selectedDoor, setSelectedDoor]= useState <CalendarDoor | null>(null);

    // function handleOpen(day: number)
    function handleOpen(door:CalendarDoor) {

        // Kontrollér, om lågen allerede er åbnet, må den gerne vises igen
        if (progress.openedDoors.includes(door.day)) {
          setSelectedDoor(door);
            return;
        }

        // Kontrollér, om brugeren allerede har åbnet en låge i dag
        if (progress.lastOpenedDate === today) {
            alert("Du har allerede åbnet en låge i dag!");
            return;
        }

        const updatedProgress: CalendarProgress = {
            openedDoors: [...progress.openedDoors, door.day],
            lastOpenedDate: today
        };

        setProgress(updatedProgress);
        setSelectedDoor(door);

    }

    return (
        <>
            <Header />
            
            <main>
              

                <Calendar
                    progress={progress}
                    today={today}
                    onOpen={handleOpen}
                />

                <DoorsContent 
                door={selectedDoor} 
                onClose ={() => setSelectedDoor(null)}
                />
            </main>

            <Footer />
        </>
    );
}

export default App;
