import type { CalendarDoor } from "../types/Calendar";
import QuizContent from "../components/QuizContent";
import TrueFalseContent from "../components/TrueFalseContent";
import InfoContent from "../components/InfoContent";

type DoorsContentProps = {
    door: CalendarDoor | null;
    onClose :() => void ;
};

function renderDoorContent (door:CalendarDoor){

    switch (door.content.kind){

        case "quiz":
        
        return <QuizContent content={door.content }/>;

        case "trueFalse" :
        
        return <TrueFalseContent content ={door.content} />;

        case "info" :
        
         return <InfoContent content ={door.content} />;

        //  case "video" :
        
        //  return <VideoContent door ={door} />;

        //  case "advent" :

        //   return <AdventContent door ={door} />;

          default:
            return <p>Inhold vises snart !</p>;
  
    }
}



export default function DoorsContent ({door,onClose}: DoorsContentProps){

    if(!door) return null;

    return (
        <div className="content-overlay" onClick ={onClose}>
            <div className="content" onClick ={(event)=>event.stopPropagation()} >
                <button className="content-close" onClick={onClose} aria-label="Luk vinduet">
                 &times;
                </button>
                <h1>Dag {door.day}</h1>
                <h2>{door.content.title}</h2>
                {renderDoorContent(door)}



            </div>
        </div>
    );
    }