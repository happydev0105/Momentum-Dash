import React, { useState, useEffect } from 'react';
import './styles.css';

const App = () => {
  const [greeting, setGreeting] = useState('');
  const [visionItems, setVisionItems] = useState([]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

  const addVisionItem = (item) => {
    setVisionItems([...visionItems, item]);
  };

  const removeVisionItem = (index) => {
    setVisionItems(visionItems.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="greeting">{greeting}</div>
      <div className="vision-board">
        {visionItems.map((item, index) => (
          <div className="vision-item" key={index} draggable>
            {item}
            <button onClick={() => removeVisionItem(index)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={() => addVisionItem(prompt('Enter vision item:'))}>
        Add Vision Item
      </button>
    </div>
  );
};

export default App;
