import { useRef, useState, useEffect } from "react";
import data from "../assets/data.json";
import left from "../assets/left-arrow.svg";
import right from "../assets/right-arrow.svg";
import "./Gallery.css";
import { Power3, TweenLite } from "gsap";

const Gallery = () => {
  let imageList = useRef(null);
  let detailList = useRef(null);

  const [active, setActive] = useState(0);

  useEffect(() => {
    TweenLite.to(detailList.children[0], 0, {
      opacity: 1,
    });
  }, []);

  const nextSlide = () => {
    let shift = imageList.getBoundingClientRect().width;
    for (let image of imageList.children) {
      TweenLite.to(image, 1, {
        x: -(shift * (active + 1)),
        ease: Power3.easeOut,
      });
    }

    TweenLite.to(detailList.children[active], 1, {
      opacity: 0,
      ease: Power3.easeOut,
    });

    TweenLite.to(detailList.children[active + 1], 1, {
      opacity: 1,
      ease: Power3.easeOut,
      delay: 0.5,
    });

    TweenLite.from(detailList.children[active + 1], 1, {
      y: 20,
      ease: Power3.easeOut,
      delay: 0.5,
    });

    setActive(active + 1);
  };

  const prevSlide = () => {
    let shift = imageList.getBoundingClientRect().width;
    for (let image of imageList.children) {
      TweenLite.to(image, 1, {
        x: -(shift * (active - 1)),
        ease: Power3.easeOut,
      });
    }

    TweenLite.to(detailList.children[active], 1, {
      opacity: 0,
      ease: Power3.easeOut,
    });

    TweenLite.to(detailList.children[active - 1], 1, {
      opacity: 1,
      ease: Power3.easeOut,
      //   delay: 0.5,
    });

    TweenLite.from(detailList.children[active - 1], 1, {
      y: 20,
      ease: Power3.easeOut,
      //   delay: 0.5,
    });

    setActive(active - 1);
  };

  return (
    <div className="gallery">
      <div className="content">
        <ul ref={(el) => (detailList = el)}>
          {data.map((item, idx) => (
            <li className={active === idx ? "active" : ""}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <span>{item.location}</span>
            </li>
          ))}
        </ul>
        <div className="controls">
          <button onClick={prevSlide} disabled={active === 0}>
            <img src={left} alt="Left" />
          </button>
          <button onClick={nextSlide} disabled={active === data.length - 1}>
            <img src={right} alt="Right" />
          </button>
        </div>
      </div>
      <div className="image">
        <ul ref={(el) => (imageList = el)}>
          {data.map((item, idx) => (
            <li className={active === idx ? "active" : ""}>
              <img src={item.image} alt={item.title} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
