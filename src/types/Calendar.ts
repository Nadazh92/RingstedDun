
export type Options = {
    id : number ;
    text : string;
    correct : boolean;

}

export type quiz = {
    kind: "quiz";
    title : string ;
    subtitle : string;
    question : string;
    options : Options;
    explanation : string;

}


export type trueFalse = {
    kind : "trueFalse";
    title : string ;
    statement : string;
    correct : boolean;
    explanation : string;
}

export type Link = {
    label : string;
    url : string ;
}

export type Facts = {
    title : string ;
    text : string ; 
}

export type info = {
    kind : "info";
    title : string;
    text : string ;
    link : Link ; 
    facts : Facts[] ;
    
}

export type invite = {
    kind : "invite";
    title : string ;
    text : string ;
    url : string ;
}

export type offer = {
    kind : "offer";
    title : string ;
    text : string ;
    code : string;
    link : Link ;

}



export type advent = {
    kind: "advent";
    title : string ;
    text : string ;
    code : string ; 
}

export  type CalendarDoor = {
    day: number;
    date : string;
    content : quiz | trueFalse | info | invite | offer | advent;
}

