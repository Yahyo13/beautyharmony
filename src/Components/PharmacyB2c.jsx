import React from 'react';
import { FaMapMarkerAlt, FaClock, FaPhoneAlt } from 'react-icons/fa';
import './PharmacyB2c.css';

const PharmacyB2c = () => {
  return (
    <section className="pharmacy" id="pharmacy-location">
      <div className="pharmacy__container">
        
        {/* Левая часть: Контакты */}
        <div className="pharmacy__info" data-aos="fade-right">
          <span className="pharmacy__subtitle">Официальная точка продаж</span>
          <h2 className="pharmacy__title">Ждем вас в нашей аптеке</h2>
          <div className="pharmacy__divider"></div>
          <p className="pharmacy__text">
            Вы можете вживую ознакомиться со всем ассортиментом наших брендов, получить консультацию и приобрести продукцию прямо на месте.
          </p>

          <div className="pharmacy__details">
            <div className="pharmacy__detail-item">
              <div className="pharmacy__icon-box">
                <FaMapMarkerAlt />
              </div>
              <div className="pharmacy__detail-text">
                <h4>Адрес</h4>
                <p>г. Ташкент, Мирзо-Улугбекский район, ул. Паркентская, дом 13</p>
                <span>(Ориентир: напротив Паркентского рынка)</span>
              </div>
            </div>

            <div className="pharmacy__detail-item">
              <div className="pharmacy__icon-box">
                <FaClock />
              </div>
              <div className="pharmacy__detail-text">
                <h4>Режим работы</h4>
                <p>Ежедневно: с 09:00 до 21:00</p>
                <span>Без перерывов и выходных</span>
              </div>
            </div>

            <div className="pharmacy__detail-item">
              <div className="pharmacy__icon-box">
                <FaPhoneAlt />
              </div>
              <div className="pharmacy__detail-text">
                <h4>Телефон для справок</h4>
                <p><a href="tel:+998901234567">+998 (90) 123-45-67</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Правая часть: Карта */}
        <div className="pharmacy__map-box" data-aos="fade-left" data-aos-delay="200">
          {/* Интерактивный эмбед Яндекс.Карт */}
          <iframe 
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A32ccb3687394c8ba57fd775b48bc29df273df8996e171b3e7bc28562d515f4e1&amp;source=constructor" 
            width="100%" 
            height="100%" 
            frameBorder="0"
            title="Beauty Harmony Location"
            className="pharmacy__iframe"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default PharmacyB2c;