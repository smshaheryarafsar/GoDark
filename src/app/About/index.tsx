import React from "react";
import MissionVision from "./MissionVision";
import { AboutUsProps } from "./types";
import styles from "./styles";
import Overview from "../Overview/index";

const AboutUs: React.FC<AboutUsProps> = ({ companyName }) => {
  return (
    <section className="about-us" id="about">
      <div className="content-wrapper">
        <div className="info-column">
          <h1 className="title">About Us</h1>
          <p className="description">
            At <span className="BrandName">{companyName}</span>, we are
            pioneering food security through digital transformation in the F&B
            industry. ChefAdmin, our first product on this mission, leverages
            advanced neural technology, data analytics, and seamless integration
            to ensure resilient food supply chains, optimise kitchen operations,
            streamline inventory management, and enhance guest experiences
            across the GCC region. Our focus on efficiency, traceability, and
            resource optimisation supports the long-term sustainability and
            security of food systems.
          </p>
          <Overview />
        </div>
        <MissionVision />
      </div>
      <style jsx>{styles}</style>
    </section>
  );
};

export default AboutUs;
