import React from "react";
import { useState } from "react";
import slider from "../slider";

const Header = () => {
  const [selected, setSelected] = useState(0);
  const { id, img, heading, description } = slider[selected];
  const [show, setShow] = useState(false);

  const checkNumber = (num) => {
    if (num > slider.length - 1) {
      return 0;
    }
    if (num < 0) {
      return slider.length - 1;
    }
    return num;
  };
  const nextSlideHandler = () => {
    setSelected((select) => {
      let newSelect = select + 1;
      return checkNumber(newSelect);
    });
  };
  const prevSlideHandler = () => {
    setSelected((select) => {
      let newSelect = select - 1;
      return checkNumber(newSelect);
    });
  };

  const displayMobileMenu = () => {
    setShow(!show);
  };

  const onCloseHandler = () => {
    console.log("show is", show);
    setShow(false);
  };

  return (
    <header className={`${id - 1 === selected ? "active-slider" : ""}`}>
      <div className="hero__img">
        <img className="hero-img" src={img} alt={heading} />
        <div className="logo__nav">
          <img
            className="display__mobile"
            src="./images/icon-hamburger.svg"
            alt="hamburger icon"
            onClick={displayMobileMenu}
          />
          <nav className={`nav__links__mobile  ${show ? "show" : "hide"}`}>
            <div className="nav-mb">
              <img
                src="./images/icon-close.svg"
                onClick={onCloseHandler}
                alt="close icon"
              />
              <ul>
                <li>home</li>
                <li>shop</li>
                <li>about</li>
                <li>contact</li>
              </ul>
            </div>
          </nav>
          <div className="logo">
            <img src="./images/logo.svg" alt="room logo" />
          </div>
          <nav className="nav__links">
            <ul>
              <li>home</li>
              <li>shop</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </nav>
        </div>
        <div className="nav__arrows">
          <img
            className="left__icon"
            src="./images/icon-angle-left.svg"
            alt="icon-angle-left"
            onClick={prevSlideHandler}
          />
          <img
            className="right__icon"
            src="./images/icon-angle-right.svg"
            alt="icon-angle-right"
            onClick={nextSlideHandler}
          />
        </div>
      </div>
      <div className="hero__content">
        <h1>{heading}</h1>
        <p>{description}</p>
        <button className="btn btn-shop">
          Shop now{" "}
          <span>
            <svg
              width="40"
              height="12"
              xmlns="http://www.w3.org/2000/svg"
              className="icon-shop"
            >
              <path
                d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z"
                fill="#000"
                fillRule="nonzero"
              />
            </svg>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
