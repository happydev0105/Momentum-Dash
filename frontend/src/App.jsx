import React, { useState, useEffect } from 'react';
import './styles.css';
import axios from 'axios';
import VisionBoard from './VisionBoard';

const App = () => {
  const [greeting, setGreeting] = useState('');
  const [visionItems, setVisionItems] = useState([]);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

    axios.get('http://localhost:3000/vision-items')
      .then(response => setVisionItems(response.data));
  }, []);

  const addVisionItem = async (item) => {
    const response = await axios.post('http://localhost:3000/vision-items', { content: item });
    setVisionItems([...visionItems, response.data]);
  };

  const removeVisionItem = async (id) => {
    await axios.delete(`http://localhost:3000/vision-items/${id}`);
    setVisionItems(visionItems.filter(item => item._id !== id));
  };

  return (
    <div>
      <div className="greeting">{greeting}</div>
      <VisionBoard
        visionItems={visionItems}
        addVisionItem={addVisionItem}
        removeVisionItem={removeVisionItem}
      />
    </div>
  );
};

export default App;
