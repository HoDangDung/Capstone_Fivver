import React from "react";
import Carousel from "./Carousel";
import Content from "./Content";
import style from "./home.module.css";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo/logo2.png";
import cn from "classnames";

const Home = () => {
  return (
    <>
      <header
        className={cn(
          "container d-flex justify-content-between align-items-center",
          style.header
        )}
      >
        <div className={style.headerLogo}>
          <Link to="/" className={style.headerLogoLink}>
            <img src={logo} alt="" className={style.logo} />
          </Link>
        </div>

        <ul className="nav">
          <li className={style.navItem}>
            <Link to="/" className={style.navLink}>
              Fiverr Business
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/" className={style.navLink}>
              Explore
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/" className={style.navLink}>
              English
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/" className={style.navLink}>
              US$ USD
            </Link>
          </li>
          <li className={style.navItem}>
            <Link to="/" className={style.navLink}>
              Become a Seller
            </Link>
          </li>

          <li className={style.navItem}>
            <Link to="/" className={style.navLink}>
              Sign in
            </Link>
          </li>

          <li className={style.navItem}>
            <Link to="/" className={style.navLinkJoin}>
              Join
            </Link>
          </li>
        </ul>
      </header>

      <Carousel className="container" />

      <Content />
    </>
  );
};

export default Home;
