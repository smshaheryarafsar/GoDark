import React from "react";

const CTAButton: React.FC = () => {
  return (
    <>
      <div className="cta-container">
        <div className="cta-wrapper">
          <button>
            <div className="left"></div>
            Hover me!
            <div className="right"></div>
          </button>
        </div>
      </div>
      <style jsx>{`
        button {
          position: relative;
          padding: 10px 20px;
          border: none;
          background: none;
          cursor: pointer;

          font-family: "Source Code Pro";
          font-weight: 900;
          text-transform: uppercase;
          font-size: 30px;
          color: var(--text-color);

          background-color: var(--btn-color);
          box-shadow: var(--shadow-color) 2px 2px 22px;
          border-radius: 4px;
          z-index: 0;
          overflow: hidden;
        }

        button:focus {
          outline-color: transparent;
          box-shadow: var(--btn-color) 2px 2px 22px;
        }

        .right::after,
        button::after {
          content: var(--content);
          display: block;
          position: absolute;
          white-space: nowrap;
          padding: 40px 40px;
          pointer-events: none;
        }

        button::after {
          font-weight: 200;
          top: -30px;
          left: -20px;
        }

        .right,
        .left {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
        }
        .right {
          left: 66%;
        }
        .left {
          right: 66%;
        }
        .right::after {
          top: -30px;
          left: calc(-66% - 20px);

          background-color: var(--bg-color);
          color: transparent;
          transition: transform 0.4s ease-out;
          transform: translate(0, -90%) rotate(0deg);
        }

        button:hover .right::after {
          transform: translate(0, -47%) rotate(0deg);
        }

        button .right:hover::after {
          transform: translate(0, -50%) rotate(-7deg);
        }

        button .left:hover ~ .right::after {
          transform: translate(0, -50%) rotate(7deg);
        }

        /* bubbles */
        button::before {
          content: "";
          pointer-events: none;
          opacity: 0.6;
          background: radial-gradient(
              circle at 20% 35%,
              transparent 0,
              transparent 2px,
              var(--text-color) 3px,
              var(--text-color) 4px,
              transparent 4px
            ),
            radial-gradient(
              circle at 75% 44%,
              transparent 0,
              transparent 2px,
              var(--text-color) 3px,
              var(--text-color) 4px,
              transparent 4px
            ),
            radial-gradient(
              circle at 46% 52%,
              transparent 0,
              transparent 4px,
              var(--text-color) 5px,
              var(--text-color) 6px,
              transparent 6px
            );

          width: 100%;
          height: 300%;
          top: 0;
          left: 0;
          position: absolute;
          animation: bubbles 5s linear infinite both;
        }

        @keyframes bubbles {
          from {
            transform: translate();
          }
          to {
            transform: translate(0, -66.666%);
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
      `}</style>
    </>
  );
};

export default CTAButton;
