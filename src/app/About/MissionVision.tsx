import React from "react";
import styles from "./styles";

const MissionVision: React.FC = () => {
  return (
    <div className="mission-vision-column">
      <div className="decorative-lines">
        <div className="line short" />
        <div className="line long" />
      </div>
      <div className="content">
        <div className="mission">
          <h2 className="section-title">
            <span className="highlight">Mission</span> Statement
          </h2>
          <p className="section-description">
            Empowering the food and beverage industry through digital
            transformation.
          </p>
        </div>
        <div className="vision">
          <h2 className="section-title">
            <span className="highlight">Vision</span> Statement
          </h2>
          <p className="section-description">
            To secure the future of the GCC's food and beverage industry by
            boosting food security, cutting waste, and optimising supply chains,
            empowering businesses to thrive sustainably and profitably.
          </p>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default MissionVision;
