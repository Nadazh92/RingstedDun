
import {useState} from "react";
import type {quiz} from "../types/Calendar";

type QuizContentProps = {
    content: quiz;
};

export default function QuizContent ({content}: QuizContentProps){
    const [selectedOption, setSelectedOption] =useState <number | null >(null);

    const selectedAnswer = content.options.find ((option) => option.id === selectedOption);

    return (
        <div className="quiz-content">
            <h3>{content.subtitle}</h3>
            <p>{content.question}</p>

            {content.options.map((option) =>
             (
             <button 
            key= {option.id} 
            onClick={() => setSelectedOption(option.id)} 
            disabled={selectedOption !== null}> {option.text}</button>
            ))}

            {selectedAnswer && (
                <div className="answer-feedback">
                    <h3>{selectedAnswer.correct
                        ? "Godt svaret!"
                        : "Det var desværre ikke rigtigt." }

                    </h3>
                    <p>{content.explanation}</p>
                </div>
            )}
        </div>
    );
}