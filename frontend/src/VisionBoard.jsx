import React from 'react';

const VisionBoard = ({ visionItems, addVisionItem, removeVisionItem }) => {
  const handleAddItem = () => {
    const itemContent = prompt('Enter vision item:');
    if (itemContent) {
      addVisionItem(itemContent);
    }
  };

  return (
    <div>
      <div className="vision-board">
        {visionItems.map((item) => (
          <div className="vision-item" key={item._id} draggable>
            {item.content}
            <button onClick={() => removeVisionItem(item._id)}>Remove</button>
          </div>
        ))}
      </div>
      <button onClick={handleAddItem}>Add Vision Item</button>
    </div>
  );
};

export default VisionBoard;
