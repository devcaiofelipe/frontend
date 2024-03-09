import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="container">
      <TextExpander>
        Space travel requires some seriously amazing technology and
        collaboration between countries, private companies, and international
        space organizations. And while it's not always easy (or cheap), the
        results are out of this world. Think about the first time humans stepped
        foot on the moon or when rovers were sent to roam around on Mars.
      </TextExpander>
    </div>
  );
}

const TextExpander = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen ? 'text-expander text-expander-show' : 'text-expander text-expander-hidden'}>
      <p>
        {children}
      </p>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>{isOpen ? 'Show less' : 'Show more'}</button>
    </div>
  );
}

export default App;
