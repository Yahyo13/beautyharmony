import React, { useState } from 'react';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaGlobe } from 'react-icons/fa';
import './FooterB2c.css';

const FooterB2c = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', company: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Спасибо, ${formData.name}! Заявка принята. Мы свяжемся с вами в ближайшее время.`);
    setFormData({ name: '', phone: '', company: '' });
  };

  return (
    <footer className="footer" id="b2b-form">
      <div className="footer__container">
        
        {/* ЛЕВАЯ ЧАСТЬ: ФОРМА ДЛЯ ОПТОВИКОВ */}
        <div className="footer__form-box" data-aos="fade-up">
          <span className="footer__subtitle">Оптовые поставки B2B</span>
          <h3 className="footer__title">Стать партнером</h3>
          <p className="footer__text">
            Получите индивидуальный прайс-лист и эксклюзивные условия для вашей торговой сети или аптеки.
          </p>

          <form onSubmit={handleSubmit} className="footer__form">
            <input 
              type="text" 
              placeholder="Ваше имя / Название компании" 
              required 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
            <input 
              type="tel" 
              placeholder="+998 (__) ___-__-__" 
              required 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
            <button type="submit" className="footer__submit-btn">
              <FaPaperPlane /> Отправить запрос
            </button>
          </form>
        </div>

        {/* ПРАВАЯ ЧАСТЬ: КОНТАКТЫ И ИНФО */}
        <div className="footer__info-box" data-aos="fade-up" data-aos-delay="100">
          <div className="footer__logo">
            Beauty<span>Harmony</span>
          </div>
          <p className="footer__company-desc">
            Официальный импортер и дистрибьютор ведущих европейских косметических брендов в Республике Узбекистан.
          </p>

          <div className="footer__contacts">
            <a href="tel:+998901234567" className="footer__contact-link">
              <FaPhoneAlt /> +998 (90) 123-45-67
            </a>
            <a href="mailto:info@beautyharmony.uz" className="footer__contact-link">
              <FaEnvelope /> info@beautyharmony.uz
            </a>
            <span className="footer__contact-link">
              <FaGlobe /> Ташкент, Узбекистан
            </span>
          </div>
        </div>

      </div>

      {/* НИЖНЯЯ ПЛАШКА */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p>&copy; {new Date().getFullYear()} Beauty Harmony. Все права защищены.</p>
          <p>Разработано для B2C & B2B дистрибьюции</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterB2c;