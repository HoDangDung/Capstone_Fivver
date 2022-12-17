import React from "react";
import Style from "./content.module.css";
import cn from "classnames";
import google from "../../../imgs/content/trusted/google.png";
import facebook from "../../../imgs/content/trusted/facebook.png";
import netflix from "../../../imgs/content/trusted/netflix.png";
import pg from "../../../imgs/content/trusted/pandg.png";
import paypal from "../../../imgs/content/trusted/paypal.png";
import Slider from "./Slider/Slider";
const Content = () => {
  return (
    <>
      <div className={Style.trusted}>
        <div className={cn("container", Style.trustedContainer)}>
          <span className={Style.text}>Trusted by: </span>
          <ul className={Style.list}>
            <li className={Style.item}>
              <img src={facebook} alt="Socials" className={Style.img} />
            </li>

            <li className={Style.item}>
              <img src={google} alt="Socials" className={Style.img} />
            </li>

            <li className={Style.item}>
              <img src={netflix} alt="Socials" className={Style.img} />
            </li>

            <li className={Style.item}>
              <img src={pg} alt="Socials" className={Style.img} />
            </li>

            <li className={Style.item}>
              <img src={paypal} alt="Socials" className={Style.img} />
            </li>
          </ul>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default Content;
