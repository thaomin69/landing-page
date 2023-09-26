import React, { useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter từ next/router

function OneMenu() {
  const router = useRouter(); // Sử dụng useRouter thay vì useNavigate

  useEffect(() => {
    const handleMenuItemClick = (event: MouseEvent) => {
      if (window.matchMedia("(max-width: 1199px)").matches) {
        const target = event.target as HTMLElement;
        if (target.classList.contains("menu-item-has-children")) {
          const menuItems = document.querySelectorAll(".menu-item-has-children");
          menuItems.forEach((menuItem) => {
            menuItem.classList.remove("active");
          });
          target.classList.add("active");
          const activeMenu = document.querySelector(".menu-item-has-children.active");
          activeMenu?.classList.remove("scrolling");
          activeMenu?.scrollIntoView({ behavior: "smooth" }); // Sử dụng behavior để làm trơn cuộc di chuyển
          const menuItemLink = target.querySelector(".menu-item-has-children > a");
          if (menuItemLink) {
            menuItemLink.setAttribute("href", "#");
          }
        }
      }
    };

    const handleRemoveMenuClick = () => {
      if (window.matchMedia("(max-width: 1199px)").matches) {
        const mainn = document.querySelector(".menu-item-has-children.active");
        mainn?.classList.remove("active");
        const activeMenu = document.querySelector(".menu-item-has-children.active");
        activeMenu?.classList.remove("scrolling");
      }
    };

    const handleMenuToggleClick = (event: MouseEvent) => {
      const menuToggle = event.currentTarget as HTMLElement;
      menuToggle.classList.toggle("active");
      const sliderMenu = document.querySelector(".slider-menu");
      sliderMenu?.classList.toggle("active");
      document.body.classList.toggle("overflow-hidden");
      const menuItems = document.querySelectorAll(".menu-item-has-children");
      menuItems.forEach((menuItem) => {
        menuItem.classList.remove("active");
        menuItem.classList.remove("scrolling");
      });
    };

    const handleWindowScroll = () => {
      if (window.matchMedia("(max-width: 1199px)").matches) {
        window.scrollTo({
          top: document.querySelector(".menu-menu-principal-container")?.getBoundingClientRect().top || 0,
          behavior: "smooth", // Làm trơn cuộc di chuyển
        });
      }
    };

    document.addEventListener('click', handleMenuItemClick);
    document.addEventListener('click', handleRemoveMenuClick);
    document.getElementById("menu-toggle")?.addEventListener('click', handleMenuToggleClick);
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      document.removeEventListener('click', handleMenuItemClick);
      document.removeEventListener('click', handleRemoveMenuClick);
      document.getElementById("menu-toggle")?.removeEventListener('click', handleMenuToggleClick);
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, [router]); // Sử dụng router thay vì navigate

  return null; // This component doesn't render anything
}

export default OneMenu;