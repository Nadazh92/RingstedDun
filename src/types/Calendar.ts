
export function getTodayDate(): string {
    const today = new Date().toLocaleString("en-CA"); // den giver datoen i format YYYY-MM-DD 
    return today;  
}

export function getDoorStatus (door: CalendarDoor, progress: CalendarProgress, today:string) : doorStatus{

    if (progress.openedDoors.includes(door.day)){
        return "opened";
    }

    if (door.date > today) { // her betyder hvis dato i json større end today, må brugeren ikke åbne lågen 
        return "locked"
    }

    return "available";
}



export type CalendarProgress = {
    openedDoors : number []; // gemme nummer af alle dage som opened ind i denne array
    lastOpenedDate : string | null ; // gemme last dato som brugeren har åbent lågen. fordi han kun må åbne en per dag
}

export type doorStatus = "locked" | "available" | "opened";

export type Options = {
    id: number;
    text: string;
    correct: boolean;

}

export type quiz = {
    kind: "quiz";
    title: string;
    subtitle: string;
    question: string;
    options: Options [];
    explanation: string;

}


export type trueFalse = {
    kind: "trueFalse";
    title: string;
    statement: string;
    correct: boolean;
    explanation: string;
}

export type Link = {
    label: string;
    url: string;
}

export type Facts = {
    title: string;
    text: string; 
}

export type info = {
    kind: "info";
    title: string;
    text: string;
    link: Link; 
    facts: Facts[];
    
}


export type video = {
    kind : "video";
    title : string;
    text : string;
    video : {
        url : string;
        caption: string;
    }

}

export type invite = {
    kind: "invite";
    title: string;
    text: string;
    url: string;
}

export type offer = {
    kind: "offer";
    title: string;
    text: string;
    code: string;
    link: Link;

}

export type advent = {
    kind: "advent";
    title: string;
    text: string;
    code: string; 
}

export  type CalenderContent =  quiz | trueFalse | info | invite | offer | advent;


export  type CalendarDoor = {
    day: number;
    date: string;
    content: CalenderContent;
}




