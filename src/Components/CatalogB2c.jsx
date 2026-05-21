import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './CatalogB2c.css';

const PRODUCTS_DATA = [
  {
    id: 1,
    brand: 'Dr. Sante',
    name: 'Шампунь Кератин + Коллаген (Восстановление)',
    category: 'hair',
    price: '45 000 сум',
    image: '/prod-keratin.png', 
    link: 'https://uzum.uz'
  },
  {
    id: 2,
    brand: 'The Doctor',
    name: 'Маска для волос с Мочевиной и Репейным маслом',
    category: 'hair',
    price: '52 000 сум',
    image: '/prod-doctor.png',
    link: 'https://uzum.uz'
  },
  {
    id: 3,
    brand: 'Fresh Juice',
    name: 'Крем-гель для душа Апельсин и Манго',
    category: 'body',
    price: '38 000 сум',
    image: '/prod-juice.png',
    link: 'https://uzum.uz'
  },
  {
    id: 4,
    brand: 'Lady Caramel',
    name: 'Восковые полоски для депиляции лица',
    category: 'body',
    price: '48 000 сум',
    image: '/prod-caramel.png',
    link: 'https://uzum.uz'
  },
  {
    id: 5,
    brand: 'Green Pharmacy',
    name: 'Нежная пенка для умывания (Травяная)',
    category: 'face',
    price: '42 000 сум',
    image: '/prod-pharm.png',
    link: 'https://uzum.uz'
  },
  {
    id: 6,
    brand: 'Fresh Juice',
    name: 'Сахарный скраб для тела Азиатская груша',
    category: 'body',
    price: '40 000 сум',
    image: '/prod-scrub.png',
    link: 'https://uzum.uz'
  }
];

const CatalogB2c = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredProducts = activeTab === 'all' 
    ? PRODUCTS_DATA 
    : PRODUCTS_DATA.filter(p => p.category === activeTab);

  return (
    <section className="catalog" id="catalog">
      <div className="catalog__container">
        
        <div className="catalog__header" data-aos="fade-up">
          <span className="catalog__subtitle">Выбор бьюти-экспертов</span>
          <h2 className="catalog__title">Популярные средства</h2>
          <div className="catalog__divider"></div>
        </div>

        {/* Навигация по категориям */}
        <div className="catalog__tabs" data-aos="fade-up" data-aos-delay="100">
          <button 
            className={`catalog__tab-btn ${activeTab === 'all' ? 'active' : ''}`} 
            onClick={() => setActiveTab('all')}
          >
            Все средства
          </button>
          <button 
            className={`catalog__tab-btn ${activeTab === 'hair' ? 'active' : ''}`} 
            onClick={() => setActiveTab('hair')}
          >
            Уход за волосами
          </button>
          <button 
            className={`catalog__tab-btn ${activeTab === 'body' ? 'active' : ''}`} 
            onClick={() => setActiveTab('body')}
          >
            Уход за телом (Caramel / Juice)
          </button>
          <button 
            className={`catalog__tab-btn ${activeTab === 'face' ? 'active' : ''}`} 
            onClick={() => setActiveTab('face')}
          >
            Для лица
          </button>
        </div>

        {/* Сетка товаров */}
        <div className="catalog__grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card" data-aos="fade-up">
              <div className="product-card__img-box">
                <span className="product-card__brand-tag">{product.brand}</span>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-card__content">
                <h3 className="product-card__name">{product.name}</h3>
                <div className="product-card__footer">
                  <span className="product-card__price">{product.price}</span>
                  <a 
                    href={product.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="product-card__btn"
                  >
                    Uzum <FaExternalLinkAlt size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CatalogB2c;