import React, { useState } from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import './HeaderB2c.css';

const HeaderB2c = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header-b2c">
      <div className="header-b2c__container">
        
        {/* ЛОГОТИП */}
        <a href="#" className="header-b2c__logo" onClick={closeMenu}>
          <span className="header-b2c__logo-accent">Beauty</span>Harmony
        </a>

        {/* НАВИГАЦИЯ ДЛЯ КЛИЕНТОВ */}
        <nav className={`header-b2c__nav ${isOpen ? 'header-b2c__nav--open' : ''}`}>
          <ul className="header-b2c__menu">
            <li><a href="#catalog" onClick={closeMenu}>Каталог средств</a></li>
            <li><a href="#brands-showcase" onClick={closeMenu}>Наши Бренды</a></li>
            <li><a href="#pharmacy-location" onClick={closeMenu}>Где купить в Ташкенте</a></li>
            {/* Ссылка, которая утащит бизнесмена в самый низ к форме */}
            <li><a href="#b2b-form" className="header-b2c__menu-b2b" onClick={closeMenu}>Партнерам / Опт</a></li>
          </ul>
        </nav>

        {/* КНОПКА БЫСТРОГО ПЕРЕХОДА НА UZUM */}
        <div className="header-b2c__actions">
          <a 
            href="https://uzum.uz/uz/shop/beautyh" 
            target="_blank" 
            rel="noreferrer" 
            className="header-b2c__uzum-link"
          >
            <FaShoppingBag /> <span>Магазин на Uzum</span>
          </a>
        </div>

        {/* БУРГЕР ДЛЯ МОБИЛОК */}
        <button 
          className={`header-b2c__burger ${isOpen ? 'header-b2c__burger--active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default HeaderB2c;