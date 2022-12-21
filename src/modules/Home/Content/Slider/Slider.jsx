import React from "react";
import Style from "./slider.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";
import item1 from "../../../../imgs/slider/item1.jpg";
import Slider from "react-slick";

const MySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <>
      <div className={Style.slider}>
        <div className={cn("container", Style.sliderContainer)}>
          <h3 className={Style.heading}>Popular professional services</h3>
          <Slider {...settings} className={Style.list}>
            <div className={Style.item}>
              <Link className={Style.link}>
                <img src={item1} alt="" className={Style.img} />
                <div className={Style.desc}>
                  <p className={Style.text}>Build your brand</p>
                  <h4 className={Style.itemHeading}>Logo Design</h4>
                </div>
              </Link>
            </div>

            <div className={Style.item}>
              <Link className={Style.link}>
                <img src={item1} alt="" className={Style.img} />
                <div className={Style.desc}>
                  <p className={Style.text}>Build your brand</p>
                  <h4 className={Style.itemHeading}>Logo Design</h4>
                </div>
              </Link>
            </div>

            <div className={Style.item}>
              <Link className={Style.link}>
                <img src={item1} alt="" className={Style.img} />
                <div className={Style.desc}>
                  <p className={Style.text}>Build your brand</p>
                  <h4 className={Style.itemHeading}>Logo Design</h4>
                </div>
              </Link>
            </div>

            <div className={Style.item}>
              <Link className={Style.link}>
                <img src={item1} alt="" className={Style.img} />
                <div className={Style.desc}>
                  <p className={Style.text}>Build your brand</p>
                  <h4 className={Style.itemHeading}>Logo Design</h4>
                </div>
              </Link>
            </div>

            <div className={Style.item}>
              <Link className={Style.link}>
                <img src={item1} alt="" className={Style.img} />
                <div className={Style.desc}>
                  <p className={Style.text}>Build your brand</p>
                  <h4 className={Style.itemHeading}>Logo Design</h4>
                </div>
              </Link>
            </div>

            <div className={Style.item}>
              <Link className={Style.link}>
                <img src={item1} alt="" className={Style.img} />
                <div className={Style.desc}>
                  <p className={Style.text}>Build your brand</p>
                  <h4 className={Style.itemHeading}>Logo Design</h4>
                </div>
              </Link>
            </div>

            <div className={Style.item}>
              <Link className={Style.link}>
                <img src={item1} alt="" className={Style.img} />
                <div className={Style.desc}>
                  <p className={Style.text}>Build your brand</p>
                  <h4 className={Style.itemHeading}>Logo Design</h4>
                </div>
              </Link>
            </div>

            <div className={Style.item}>
              <Link className={Style.link}>
                <img src={item1} alt="" className={Style.img} />
                <div className={Style.desc}>
                  <p className={Style.text}>Build your brand</p>
                  <h4 className={Style.itemHeading}>Logo Design</h4>
                </div>
              </Link>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MySlider;
