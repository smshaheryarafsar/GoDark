import React from "react";
import styles from "./styles";

const MissionVision: React.FC = () => {
  return (
    <div className="mission-vision-column">
      <div className="decorative-lines">
        {/* <div className="line short" />
        <div className="line long" /> */}
      </div>
      <div className="content">
        <div className="mission">
          <h2 className="section-title">
            <span className="highlight">Mission</span>
          </h2>
          <div className="left-border">
            <p className="section-description">
              <span
                className="section-title"
                style={{ marginBottom: "14px", display: "block" }}
              >
                Statement
              </span>{" "}
              Empowering the food and beverage industry through digital
              transformation.
            </p>
          </div>
        </div>
        <div className="vision">
          <h2 className="section-title">
            <span className="highlight">Vision</span>
          </h2>
          <div className="left-border">
            <p className="section-description">
              <span
                className="section-title"
                style={{ marginBottom: "14px", display: "block" }}
              >
                Statement
              </span>{" "}
              To secure the future of the GCC's food and beverage industry by
              boosting food security, cutting waste, and optimising supply
              chains, empowering businesses to thrive sustainably and
              profitably.
            </p>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default MissionVision;
