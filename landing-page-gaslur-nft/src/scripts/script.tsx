import React, { useState } from 'react';

function Script() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleBarItemClick = (index: number) => {
    setActiveItem(index);
  };

  const renderBarItems = () => {
    const barItems = ['Menu Item 1', 'Menu Item 2', 'Menu Item 3']; // Thay thế bằng danh sách các mục menu thực tế của bạn
    return barItems.map((item, index) => (
      <div
        key={index}
        className={`bar-item ${activeItem === index ? 'active' : ''}`}
        onClick={() => handleBarItemClick(index)}
      >
        {item}
      </div>
    ));
  };

  return (
    <div>
      {/* Your React components and layout here */}
      <div className="slider-menu">
        <div className="menu-menu-principal-container">
          {renderBarItems()}
          {/* Add more menu items here */}
        </div>
      </div>
    </div>
  );
}

export default Script;