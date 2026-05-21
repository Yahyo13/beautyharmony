import React from 'react';
import { FaShoppingBag, FaMapMarkerAlt } from 'react-icons/fa';
import './HeroB2c.css';

const HeroB2c = () => {
  return (
    <section className="hero-b2c" id="hero-b2c">
      <div className="hero-b2c__container">
        
        {/* ЛЕВАЯ ЧАСТЬ: ТЕКСТ И КНОПКИ */}
        <div className="hero-b2c__content" data-aos="fade-right">
          <span className="hero-b2c__badge">Европейские бьюти-тренды в Ташкенте</span>
          <h1 className="hero-b2c__title">
            Твоя идеальная <br />
            <span>бьюти-рутина</span>
          </h1>
          <p className="hero-b2c__text">
            Позаботьтесь о себе с заботой от природы. Официальные хиты косметики от 
            <strong> Dr. Sante</strong>, <strong>The Doctor</strong>, <strong>Lady Caramel</strong>, <strong>Fresh Juice</strong> и <strong>Green Pharmacy</strong> теперь доступны в один клик. Оригинальное качество, бережный уход и легкие текстуры.
          </p>
          
          <div className="hero-b2c__actions">
            <a href="https://uzum.uz" target="_blank" rel="noreferrer" className="hero-b2c__btn hero-b2c__btn--uzum">
              <FaShoppingBag /> Заказать на Uzum
            </a>
            <a href="#pharmacy-location" className="hero-b2c__btn hero-b2c__btn--pharmacy">
              <FaMapMarkerAlt /> Наша Аптека
            </a>
          </div>

          {/* Статистика для солидности */}
          <div className="hero-b2c__stats">
            <div className="hero-b2c__stat-item">
              <h4>100%</h4>
              <p>Оригинал</p>
            </div>
            <div className="hero-b2c__stat-divider"></div>
            <div className="hero-b2c__stat-item">
              <h4>50+</h4>
              <p>Средств ухода</p>
            </div>
            <div className="hero-b2c__stat-divider"></div>
            <div className="hero-b2c__stat-item">
              <h4>24 часа</h4>
              <p>Доставка Uzum</p>
            </div>
          </div>
        </div>
        
        {/* ПРАВАЯ ЧАСТЬ: БАННЕР С КАРТИНКОЙ */}
        <div className="hero-b2c__image-box" data-aos="fade-left" data-aos-delay="200">
          <div className="hero-b2c__circle-bg"></div>
          {/* Пока картинки нет, тут будет аккуратное пустое место под неё */}
          <img src="/hero-products.png" alt="Косметика Beauty Harmony" className="hero-b2c__main-img" />
          
          {/* Парящие бьюти-плашки */}
          <div className="hero-b2c__floating-badge badge--top">
            🌿 Натурально
          </div>
          <div className="hero-b2c__floating-badge badge--bottom">
            ✨ Хиты продаж
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroB2c;