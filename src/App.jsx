import React, { useEffect } from 'react';
import HeaderB2c from './Components/HeaderB2c';
import HeroB2c from './Components/HeroB2c';
import BrandsB2c from './Components/BrandsB2c';
import CatalogB2c from './Components/CatalogB2c';
import PharmacyB2c from './Components/PharmacyB2c';
import FooterB2c from './Components/FooterB2c'; // Наш новенький футер с B2B-формой

// Анимации AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="app-wrapper">
      {/* Шапка сайта */}
      <HeaderB2c />
      
      {/* Главный контент */}
      <main>
        {/* Презентационный баннер */}
        <HeroB2c />

        {/* Блок европейских брендов */}
        <BrandsB2c />
        
        {/* Интерактивный каталог товаров */}
        <CatalogB2c />

        {/* Блок партнерской аптеки с Яндекс.Картой */}
        <PharmacyB2c />
      </main>

      {/* Глубокий изумрудный футер с формой для оптовиков */}
      <FooterB2c />
    </div>
  );
}

export default App;