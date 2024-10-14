import React from "react";

interface ContentCardProps {
  title: string;
  content: string;
  imageSrc: string;
}

const ContentCard: React.FC<ContentCardProps> = ({
  title,
  content,
  imageSrc,
}) => {
  return (
    <>
      <img
        src={imageSrc}
        alt="Whitepaper or guide illustration"
        className="content-image"
      />
      <div className="content-text">
        <h2 className="content-title">{title}</h2>
        <div className="content-description">
          <p className="description-text">{content}</p>
          <a href="#" className="read-more">
            Read More
          </a>
        </div>
      </div>
      <style jsx>{`
        .content-image {
          aspect-ratio: 1.46;
          object-fit: contain;
          object-position: center;
          width: 694px;
          border-radius: 14px;
          align-self: start;
          min-width: 240px;
        }
        .content-text {
          display: flex;
          min-width: 240px;
          flex-direction: column;
          justify-content: start;
          flex: 1;
          flex-basis: 0%;
        }
        .content-title {
          width: 100%;
          gap: 29px;
          letter-spacing: -0.77px;
          font: 400 28px/1 Menlo, sans-serif;
        }
        .content-description {
          display: flex;
          margin-top: 14px;
          width: 100%;
          flex-direction: column;
          justify-content: space-between;
          flex: 1;
        }
        .description-text {
          flex: 1;
          width: 100%;
          font: 600 37px/49px Sora, sans-serif;
        }
        .read-more {
          align-self: stretch;
          margin-top: 141px;
          width: 100%;
          letter-spacing: -0.77px;
          flex-wrap: wrap;
          font: 700 23px/38px Menlo, -apple-system, Roboto, Helvetica,
            sans-serif;
          color: inherit;
          text-decoration: none;
        }
        @media (max-width: 991px) {
          .content-image,
          .content-text,
          .content-title,
          .content-description,
          .description-text {
            max-width: 100%;
          }
          .read-more {
            max-width: 100%;
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default ContentCard;
