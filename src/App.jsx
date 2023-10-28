import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from './CoreConceptsData.js'

function App() {
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

  return (
    <div>
      <Header></Header>
      <main>
        <CoreConcepts />
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => clickHandle('components')}>Components</TabButton>
            <TabButton onSelect={() => clickHandle('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => clickHandle('props')}>Props</TabButton>
            <TabButton onSelect={() => clickHandle('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;