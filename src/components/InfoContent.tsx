
import type {info} from "../types/Calendar";

type InfoContentProps = {
    content: info;
};

export default function InfoContent ({content}: InfoContentProps){
    return (
        <div>
            <p>{content.text}</p>

            {content.facts?.map((fact, index) => (
                <div key={index}>
                    <h3>{fact.title}</h3>
                    <p>{fact.text}</p>
                </div>
            ))}

            {content.link && (
                <a href={content.link.url} target="_blank" rel="noreferrer">
                    {content.link.label}
                </a>
            )}
        </div>
    );

}