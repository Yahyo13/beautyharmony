// import React from 'react';
// import { FaCheckCircle } from 'react-icons/fa';
// import './BrandsB2c.css';

// const BRANDS_DATA = [
//   {
//     id: 'sante',
//     name: 'Dr. Sante',
//     desc: 'Профессиональный уход за волосами на основе инновационных формул. Реконструкция, глубокое увлажнение и защита цвета без утяжеления.',
//     tag: 'Восстановление и сила',
//     accent: '#044327'
//   },
//   {
//     id: 'doctor',
//     name: 'The Doctor',
//     desc: 'Аптечные рецептуры здоровья. Средства с высоким содержанием мочевины, дегтя, репейного и касторового масел для максимального терапевтического эффекта.',
//     tag: 'Здоровье и трихология',
//     accent: '#d4af37'
//   },
//   {
//     id: 'juice',
//     name: 'Fresh Juice',
//     desc: 'Взрыв сочных фруктовых ароматов и бережное очищение. Упоительные крем-гели для душа и сахарные скрабы, которые превращают ванну в SPA-ритуал.',
//     tag: 'Фруктовое SPA',
//     accent: '#7000ff'
//   },
//   {
//     id: 'caramel',
//     name: 'Lady Caramel',
//     desc: 'Безупречно гладкая кожа без лишних усилий. Экспертные средства для быстрой, деликатной и безболезненной депиляции в домашних условиях.',
//     tag: 'Идеальная гладкость',
//     accent: '#ff4081'
//   },
//   {
//     id: 'pharmacy',
//     name: 'Green Pharmacy',
//     desc: 'Сила целебных трав и натуральных масел. Мягкие очищающие пенки, жидкое мыло и интимный уход, созданные по традиционным европейским рецептам.',
//     tag: 'Натуральный уход',
//     accent: '#2e7d32'
//   }
// ];

// const BrandsB2c = () => {
//   return (
//     <section className="brands-section" id="brands-showcase">
//       <div className="brands-section__container">
        
//         {/* Заголовок */}
//         <div className="brands-section__header" data-aos="fade-up">
//           <span className="brands-section__subtitle">Мировые бестселлеры</span>
//           <h2 className="brands-section__title">Наши Европейские Бренды</h2>
//           <div className="brands-section__divider"></div>
//         </div>

//         {/* Сетка брендов */}
//         <div className="brands-section__grid">
//           {BRANDS_DATA.map((brand) => (
//             <div key={brand.id} className="brand-card" data-aos="fade-up">
//               <div className="brand-card__badge" style={{ borderColor: brand.accent, color: brand.accent }}>
//                 {brand.tag}
//               </div>
//               <h3 className="brand-card__name">{brand.name}</h3>
//               <p className="brand-card__desc">{brand.desc}</p>
//               <div className="brand-card__footer">
//                 <span className="brand-card__guarantee">
//                   <FaCheckCircle style={{ color: '#044327', marginRight: '6px' }} /> 100% Оригинал
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default BrandsB2c;





import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './BrandsB2c.css';

const BRANDS_DATA = [
  {
    id: 'sante',
    logo: '/src/assets/DrSante.jpg', // Сюда положишь логотип Dr. Sante
    desc: 'Профессиональный уход за волосами на основе инновационных формул. Реконструкция, глубокое увлажнение и защита цвета без утяжеления.',
    tag: 'Восстановление и сила',
    alt:'Dr.Sante',
    accent: '#044327'
  },
  {
    id: 'doctor',
    logo: '/src/assets/TheDoctor.jpg', // Сюда положишь логотип The Doctor
    desc: 'Аптечные рецептуры здоровья. Средства с высоким содержанием мочевины, дегтя, репейного и касторового масел для максимального терапевтического эффекта.',
    tag: 'Здоровье и трихология',
    alt:'The Doctor',
    accent: '#d4af37'
  },
  {
    id: 'juice',
    logo: '/src/assets/FreshJuice.jpg', // Сюда положишь логотип Fresh Juice
    desc: 'Взрыв сочных фруктовых ароматов и бережное очищение. Упоительные крем-гели для душа и сахарные скрабы, которые превращают ванну в SPA-ритуал.',
    tag: 'Фруктовое SPA',
    alt:'Fresh Juice',
    accent: '#7000ff'
  },
  {
    id: 'caramel',
    logo: '/src/assets/LadyCaramel.jpg', // Сюда положишь логотип Lady Caramel
    desc: 'Безупречно гладкая кожа без лишних усилий. Экспертные средства для быстрой, деликатной и безболезненной депиляции в домашних условиях.',
    tag: 'Идеальная гладкость',
    alt:'Lady Caramel',
    accent: '#ff4081'
  },
  {
    id: 'pharmacy',
    logo: '/src/assets/GreenPharmacy.jpg', // Сюда положишь логотип Green Pharmacy
    desc: 'Сила целебных трав и натуральных масел. Мягкие очищающие пенки, жидкое мыло и интимный уход, созданные по традиционным европейским рецептам.',
    tag: 'Натуральный уход',
    alt:'Green Pharmacy',
    accent: '#2e7d32'
  }
];

const BrandsB2c = () => {
  return (
    <section className="brands-section" id="brands-showcase">
      <div className="brands-section__container">
        
        {/* Заголовок */}
        <div className="brands-section__header" data-aos="fade-up">
          <span className="brands-section__subtitle">Мировые бестселлеры</span>
          <h2 className="brands-section__title">Наши Европейские Бренды</h2>
          <div className="brands-section__divider"></div>
        </div>

        {/* Сетка брендов (3 сверху, 2 снизу по центру) */}
        <div className="brands-section__grid">
          {BRANDS_DATA.map((brand) => (
            <div key={brand.id} className="brand-card" data-aos="fade-up">
              
              {/* Блок под логотип - ТЕПЕРЬ СВЕРХУ И ЧИСТЫЙ */}
              <div className="brand-card__logo-box">
                {/* УБРАЛИ alt text, чтобы он не перекрывал лого */}
                <img src={brand.logo} alt="" className="brand-card__logo-img" />
                <h2 style={{marginLeft:'10px'}}>{brand.alt}</h2>
              </div>

              <p className="brand-card__desc">{brand.desc}</p>
              
              <div className="brand-card__footer">
                <div className="brand-card__footer-info">
                  <span className="brand-card__guarantee">
                    <FaCheckCircle style={{ color: '#044327', marginRight: '6px' }} /> 100% Оригинал
                  </span>

                  {/* ПЕРЕНЕСЛИ БЕДЖ СЮДА, чтобы освободить место сверху */}
                  <div className="brand-card__badge" style={{ borderColor: brand.accent, color: brand.accent }}>
                    {brand.tag}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandsB2c;