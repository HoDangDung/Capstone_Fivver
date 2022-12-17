import React from "react";
import Style from "./slider.module.css";
import cn from "classnames";
import { Link } from "react-router-dom";
import item1 from "../../../../imgs/slider/item1.jpg";
const Slider = () => {
  return (
    <>
      <div className={Style.slider}>
        <div className={cn("container", Style.sliderContainer)}>
          <h3 className={Style.heading}>Popular professional services</h3>
          <div className={Style.list}>
            <div className={Style.item}>
              <Link className={Style.link}>
                <img src={item1} alt="" className={Style.img} />
                <div className={Style.desc}>
                  <p className={Style.text}>Build your brand</p>
                  <h4 className={Style.itemHeading}>Logo Design</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
