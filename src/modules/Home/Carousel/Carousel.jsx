import React from "react";
import bg1 from "../../../imgs/carousel/carousel1.jpg";
import bg2 from "../../../imgs/carousel/carousel2.jpeg";
import bg3 from "../../../imgs/carousel/carousel3.jpeg";
import bg4 from "../../../imgs/carousel/carousel4.jpeg";
import bg5 from "../../../imgs/carousel/carousel5.jpeg";
import style from "./carousel.module.css";
import { Link } from "react-router-dom";
import cn from "classnames";
import { BsSearch } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";

const MyCarousel = () => {
  return (
    <Carousel fade controls={false} indicators={false} interval={2000}>
      <Carousel.Item className={style.carousel}>
        <img className="d-block w-100" src={bg1} alt="First slide" />
        <div className={cn("container")}>
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
      </Carousel.Item>

      <Carousel.Item className={style.carousel}>
        <img className="d-block w-100" src={bg2} alt="Second slide" />
        <div className={cn("container")}>
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
      </Carousel.Item>

      <Carousel.Item className={style.carousel}>
        <img className="d-block w-100" src={bg3} alt="Third slide" />
        <div className={cn("container")}>
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
      </Carousel.Item>

      <Carousel.Item className={style.carousel}>
        <img className="d-block w-100" src={bg4} alt="For slide" />
        <div className={cn("container")}>
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
      </Carousel.Item>

      <Carousel.Item className={style.carousel}>
        <img className="d-block w-100" src={bg5} alt="Five slide" />
        <div className={cn("container")}>
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
      </Carousel.Item>
    </Carousel>
  );
};

export default MyCarousel;
