import {useState} from 'react';
import type {trueFalse} from '../types/Calendar';

type TrueFalseContentProps = {
    content: trueFalse;
};  


export default function TrueFalseContent ({content}: TrueFalseContentProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);

    return(
        <div>
            <h3>{content.statement}</h3>

            <button onClick={() => setSelectedAnswer(true)} disabled={selectedAnswer !== null}>Sandt</button>
            <button onClick={() => setSelectedAnswer(false)} disabled={selectedAnswer !== null}>Falsk</button>

            {selectedAnswer !== null && (
                <div className="answer-feedback">
                    <h3>{selectedAnswer === content.correct
                        ? "Godt svaret!"
                        : "Det var desværre ikke rigtigt." }
                    </h3>
                    <p>{content.explanation}</p>
                </div>
            )}
        </div>
    );  

}