import TabButton from "../TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from '../../CoreConceptsData.js'
import Section from "../Section.jsx";

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState();
    const clickHandle = (selectedButton) => {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select topics</p>;

    if (selectedTopic) {
        tabContent = <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>
    }

    return (<Section title="Examples" id="examples">
        <menu>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => clickHandle('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => clickHandle('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => clickHandle('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => clickHandle('state')}>State</TabButton>
        </menu>
        {tabContent}
    </Section>)
}

export default Examples;