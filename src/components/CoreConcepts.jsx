import CoreConceptData from "../CoreConceptsData";
import './CoreConcepts.css';

const Concept = ({ image, title, description }) => {
    return (<li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
    )
}

const CoreConcepts = () => {
    return (<section id="core-concepts" >
        <ul>
            {CoreConceptData.map((concept, index) => {
                return <Concept key={index} {...concept} />
            })}
        </ul>
    </section>)
}

export default CoreConcepts;
