import React from "react";
import BrandName from "./BrandName";
import Description from "./Description";
import CTAButton from "./CTAButton";
import HeroImage from "./HeroImage";
import sliderbgImage from "../images/slider-bg-01.png";

const HeroSection: React.FC = () => {
  return (
    <>
      <section className="hero-section">
        <div className="masked-section">
          <div className="mask">
            <img src={sliderbgImage.src} />
          </div>
        </div>

        <svg width="0" height="0">
          <defs>
            <clipPath id="svgPath">
              <path
                d="M648 324C648 502.94 502.94 648 324 648C145.06 648 0 502.94 0 324C0 145.06 145.06 0 324 0C502.94 0 648 145.06 648 324ZM104.717 324C104.717 445.107 202.893 543.283 324 543.283C445.107 543.283 543.283 445.107 543.283 324C543.283 202.893 445.107 104.717 324 104.717C202.893 104.717 104.717 202.893 104.717 324Z"
                fill="#D9D9D9"
              />
            </clipPath>
          </defs>
        </svg>
        <div className="hero-content">
          <div className="text-column">
            <div className="text-content">
              <BrandName />
              <Description />
              <CTAButton />
            </div>
          </div>
          <HeroImage />
        </div>
      </section>
      <style jsx>{`
        .masked-section {
          height: 100vh;
          position: absolute;
          background-image: "";
          overflow: visible;
          /* margin-top: -300px; */
          width: max-content;
          animation: zoom-in 4s !important;
          overflow: hidden;
          left: 60%;
          position: absolute;
          top: 2%;
        }

        @keyframes zoom-in {
          0% {
            transform: scale(3.5);
          }

          100% {
            transform: scale(1);
          }
        }
        .mask {
          -webkit-clip-path: url(#svgPath);
          clip-path: url(#svgPath);
          display: block;
          width: 100%;
          margin: 0 auto;
        }
        .mask > img {
          width: 100%;
          animation: zoom-ins 4s !important;
          height: 100vh;
        }

        @keyframes zoom-ins {
          0% {
            transform: scale(3.5);
          }

          100% {
            transform: scale(1);
          }
        }

        .hero-section {
          background-color: #000;
          width: 100%;
          padding: 0 0 200px 80px;
          margin-top: -100px;
        }

        @media (max-width: 991px) {
          .hero-section {
            max-width: 100%;
            padding-left: 20px;
          }
        }

        .hero-content {
          gap: 20px;
          display: flex;
        }

        @media (max-width: 991px) {
          .hero-content {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }
        }

        .text-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 45%;
          margin-left: 0;
        }

        @media (max-width: 991px) {
          .text-column {
            width: 100%;
          }
        }

        .text-content {
          display: flex;
          flex-direction: column;
          align-self: stretch;
          margin: auto 0;
        }

        @media (max-width: 991px) {
          .text-content {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .brand-name {
          background-blend-mode: normal;
          align-self: start;
          color: #2f2f2f;
          font: 500 134px/1 Clash Display, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .brand-name {
            max-width: 100%;
            font-size: 40px;
          }
        }

        .description-container {
          display: flex;
          margin-top: 337px;
          width: 100%;
          flex-direction: column;
          font-weight: 700;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .description-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .main-title {
          letter-spacing: 3px;
          font: 46px/55px Clash Display Variable, -apple-system, Roboto,
            Helvetica, sans-serif;
        }

        @media (max-width: 991px) {
          .main-title {
            max-width: 100%;
            font-size: 40px;
            line-height: 54px;
          }
        }

        .sub-title {
          color: #e5e5e7;
          letter-spacing: -0.86px;
          margin-top: 42px;
          font: 400 22px/30px Sora, sans-serif;
        }

        @media (max-width: 991px) {
          .sub-title {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .cta-container {
          display: flex;
          margin-top: 42px;
          width: 331px;
          max-width: 100%;
          align-items: center;
          color: #5a250a;
          text-transform: uppercase;
          letter-spacing: -0.22px;
          justify-content: start;
          font: 14px Inter, sans-serif;
        }

        @media (max-width: 991px) {
          .cta-container {
            margin-top: 40px;
          }
        }

        .cta-wrapper {
          align-self: stretch;
          display: flex;
          min-width: 240px;
          width: 331px;
          flex-direction: column;
          justify-content: center;
          margin: auto 0;
          padding: 6px 5px;
        }

        .cta-button {
          border-radius: 11999px;
          background-color: #d1d1d1;
          box-shadow: 10px 0 5px #ff5100;
          position: relative;
          display: flex;
          min-height: 48px;
          align-items: flex-start;
          gap: 40px 60px;
          overflow: hidden;
          justify-content: center;
          padding: 13px 61px 13px 62px;
          border: 1px solid rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 991px) {
          .cta-button {
            padding: 0 20px;
          }
        }

        .cta-background {
          align-self: start;
          position: absolute;
          z-index: 0;
          display: flex;
          min-width: 240px;
          width: 289px;
          height: 145px;
          right: -109px;
          bottom: 0;
        }

        .cta-text {
          z-index: 0;
          margin: auto 0;
        }

        .image-column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 55%;
          margin-left: 20px;
        }

        @media (max-width: 991px) {
          .image-column {
            width: 100%;
          }
        }

        .hero-image {
          aspect-ratio: 0.81;
          object-fit: contain;
          object-position: center;
          width: 100%;
          border-radius: 0;
          flex-grow: 1;
        }

        @media (max-width: 991px) {
          .hero-image {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .visually-hidden {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
