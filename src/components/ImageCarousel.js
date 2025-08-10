import Slider from 'react-slick';
// import { FaHeart, FaShareAlt, FaPlus } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageCarousel.css';

const cards = [
  {
    title: 'Project 1',
  price: 'By- AMES & CSD',
    color: '#f7842b',
    img: '/pro.png',
  },
  {
    title: 'Project 2',
  price: 'By- AMES & CSD',
    color: '#2a2a2a',
    img: '/pro.png',
  },
  {
    title: 'Project 3',
  price: 'By- AMES & CSD',
    color: '#232323',
    img: '/pro.png',
  },
  {
    title: 'Project 4',
  price: 'By- AMES & CSD',
    color: '#ffb347',
    img: '/pro.png',
  },
  {
    title: 'Project 5',
  price: 'By- AMES & CSD',
    color: '#444444',
    img: '/pro.png',
  },
];

function ImageCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container card-slider">
      <Slider {...settings}>
        {cards.map((card, idx) => (
          <div key={idx} className="slider-card-outer">
            <div className="slider-card" style={{ background: card.color }}>
              {/* Removed heart and share icons for a cleaner look */}
              <img src={card.img} alt={card.title} className="slider-card-img" />
              <div className="slider-card-content">
                <div className="slider-card-title">{card.title}</div>
                <div className="slider-card-price">{card.price}</div>
              </div>
              <div className="slider-card-action">
                <button className="slider-add-btn">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ImageCarousel;

