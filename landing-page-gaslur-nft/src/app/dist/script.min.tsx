import React, { useState } from 'react';
import { useRouter } from 'next/router';

function App() {
  const router = useRouter(); // Sử dụng useRouter thay cho useNavigate
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuItemClick = () => {
    if (window.matchMedia("(max-width: 1199px)").matches) {
      setMenuActive(true);
      router.push('/active'); // Sử dụng router.push thay cho navigate
    }
  };

  const handleBackClick = () => {
    if (window.matchMedia("(max-width: 1199px)").matches) {
      setMenuActive(false);
      router.back(); // Sử dụng router.back() để điều hướng lại trang trước đó
    }
  };

  const handleMenuToggleClick = (e: React.MouseEvent) => { // Chỉ định kiểu dữ liệu là React.MouseEvent
    e.preventDefault();
    setMenuActive(!menuActive);
    if (menuActive) {
      router.back();
    } else {
      router.push('/menu');
    }
  };

  return (
    <div>
      {/* Your React components and layout here */}
      <button id="menu-toggle" onClick={handleMenuToggleClick}>Toggle Menu</button>
      <div className={`slider-menu ${menuActive ? 'active' : ''}`}>
        <ul className="menu-menu-principal-container">
          <li className="bar-item" onClick={handleMenuItemClick}>Menu Item 1</li>
          <li className="bar-item" onClick={handleMenuItemClick}>Menu Item 2</li>
          {/* Add more menu items here */}
        </ul>
      </div>
    </div>
  );
}

export default App;