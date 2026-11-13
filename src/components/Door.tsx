// import useState from 'react';
import type {CalendarDoor , doorStatus} from '../types/Calendar';

type DoorProps = {
    door: CalendarDoor;
    status: doorStatus;
    onOpen: (day:number) => void; //En funktion, som modtager lågens nummer.
};

export default function Door({door, status, onOpen }: DoorProps) {


    function handleClick() {
        if(status === "available" || status === "opened") {
            onOpen(door.day);
            
        }

}

return (
    <button className={`door door--${status}`} onClick={handleClick} disabled={status === "locked"}>
    <span className="door-icon">
    {status === "locked" && <i className="fa-solid fa-lock"></i> }
    {status === "available" && <i className="fa-solid fa-gift"></i> }
    {status === "opened" && <i className="fa-solid fa-circle-check"></i> }
    <br />
    </span>

    <span className = "door-number">{door.day}</span> 
    <br />

     <span className="door-icon">
    {status === "locked" && <i className="fa-solid fa-snowflake"></i> }
    {status === "available" && <i className="fa-regular fa-star"></i>}
    {status === "opened" && <i className="fa-solid fa-candy-cane"></i> }
    
    </span>
   
     </button>
);
}

