import React from "react";
import './carousel-item.scss'

interface Props {
  image: string;
  src: string,
  title: string;
  text: string;
}

export const CarouselItem = (props: Props) => {
  const { image, src, title, text } = props;
  return (
    <section className="carousel-item">
      <section>
        <img className="icon" src={src} alt={`icon-${image}`} />
      </section>
      <header>
        <h3>{title}</h3>
      </header>
      <section>{text}</section>
    </section>
  );
};
