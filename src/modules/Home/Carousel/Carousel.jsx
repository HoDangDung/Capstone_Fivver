import React from "react";
import bg from "../../../imgs/carousel/carousel1.jpg";
import style from "./carousel.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";
import { BsSearch } from "react-icons/bs";

const Carousel = () => {
  return (
    <div className={style.wrapper}>
      <div className={cn("container", style.carousel)}>
        <div className={style.header}>
          <h1 className={style.heading}>
            Find the perfect <i className={style.font}>freelance</i> services
            for your business
          </h1>
          <form action="" className={style.form}>
            <BsSearch className={style.search} />
            <input
              type="text"
              className={style.formInput}
              placeholder='Try "building mobile app"'
            />
            <button className={style.btn}>Search</button>
          </form>

          <div className={style.popular}>
            <span className={style.text}>Popular:</span>
            <ul className={style.popularList}>
              <li className={style.popularItem}>
                <Link className={style.popularItemLink}>Website Design</Link>
              </li>

              <li className={style.popularItem}>
                <Link className={style.popularItemLink}>WordPress</Link>
              </li>

              <li className={style.popularItem}>
                <Link className={style.popularItemLink}>Logo Design</Link>
              </li>

              <li className={style.popularItem}>
                <Link className={style.popularItemLink}>Video Editing</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
