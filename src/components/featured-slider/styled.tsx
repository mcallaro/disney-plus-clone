import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: calc(3.5vw + 50px);
    z-index: 1;
    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }
  li.slick-active button:before {
    color: white;
    opacity: 1;
  }
  .slick-slide {
    padding: 10px;
  }
  .slick-list {
    overflow: initial;
  }
  .slick-prev {
    left: -75px;
  }
  .slick-next {
    right: -75px;
  }
  .slick-dots {
    bottom: 20px;
    right: 20px;
    text-align: right;
    li {
      margin: 0;
    }
  }
`;

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: transform 300ms ease-out 0s;
  a {
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 4px;
    .image-overlay {
      inset: 0;
      display: block;
      height: 100%;
      object-fit: cover;
      width: 100%;
      position: absolute;
      &.fit {
        inset: 10% auto auto 6.5%;
        height: auto;
        object-fit: contain;
        width: 22%;
        position: absolute;
      }
    }
    .text-overlay {
      cursor: inherit;
      font-stretch: normal;
      font-style: normal;
      font-weight: normal;
      letter-spacing: normal;
      line-height: 1.2;
      position: absolute;
      bottom: 10%;
      left: 6.5%;
      font-size: 18px;
      margin: 0;
      visibility: visible !important;
    }
    img {
      width: 100%;
      height: 100%;
    }
    &:hover {
      padding: 0;
      border: 4px solid rgba(249, 249, 249, 0.8);
      transition-duration: 300ms;
    }
    &:after {
      border-radius: 4px;
      border: 4px solid rgba(255, 255, 255, 0);
      inset: 0px;
      content: "";
      position: absolute;
      transition: border 150ms linear 0s;
    }
  }
`;

export {
  Carousel,
  Wrap
}