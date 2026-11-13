// import { useState } from 'react'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Calendar from './components/Calendar'




// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
   
//     <Header/>
      
//     <Footer/>
    

   
//     </>
//   )
// }

// export default App

import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Calendar from "./components/Calendar";

//import { getTodayDate } from "./types/Calendar";

import type { CalendarProgress } from "./types/Calendar";

function App() {

   // const today = getTodayDate();
   const today = "2026-12-03"; // Hardcoded date for testing purposes

    const [progress, setProgress] = useState<CalendarProgress>({
        openedDoors: [],
        lastOpenedDate: null 
    });

    function handleOpen(day: number) {

        // Kontrollér, om lågen allerede er åbnet
        if (progress.openedDoors.includes(day)) {
            return;
        }

        // Kontrollér, om brugeren allerede har åbnet en låge i dag
        if (progress.lastOpenedDate === today) {
            alert("Du har allerede åbnet en låge i dag!");
            return;
        }

        const updatedProgress: CalendarProgress = {
            openedDoors: [...progress.openedDoors, day],
            lastOpenedDate: today
        };

        setProgress(updatedProgress);

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
            </main>

            <Footer />
        </>
    );
}

export default App;
