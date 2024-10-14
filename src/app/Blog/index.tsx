import React from "react";
import ArticleCard from "./ArticleCard";

const BlogAndResources: React.FC = () => {
  const articlesData = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/29bdc73bbf8b561ea8ded8e535656bf991b4403909f2ae038348e6ab1e1287a7?placeholderIfAbsent=true&apiKey=2daa08173b524f8da8f7281d62378a63",
      title: "The Future of Digital Transformation in Hospitality",
      author: "Abigail Dawson",
      readTime: "7 min read",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8887100f357b9a3d92b9ce0ed2d51a3d48c1c1f330e5075ad6b7b0371ed07103?placeholderIfAbsent=true&apiKey=2daa08173b524f8da8f7281d62378a63",
      title: "Leveraging Data Analytics for Enhanced Customer Experiences",
      author: "Andrey Platov",
      readTime: "12 min read",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1ca070c0203285c340b6a354cf9ab1bedfc66f9bc0893c25a8f2e495d2eb4f80?placeholderIfAbsent=true&apiKey=2daa08173b524f8da8f7281d62378a63",
      title:
        "Sustainability in the F&B Industry: Best Practices for the GCC Market",
      author: "Abigail Dawson",
      readTime: "5 min read",
    },
  ];

  return (
    <>
      <div className="main-container" id="blogs-resources">
        <h1 className="blog-title">Blog and Resources</h1>
        <section className="insights-container">
          <header className="insights-header">
            <h1>Insights and Trends</h1>
            <nav>
              <a href="#" aria-label="See all insights and trends">
                See All
              </a>
            </nav>
          </header>
          <div className="insights-grid">
            {articlesData.map((article, index) => (
              <ArticleCard
                key={index}
                imageUrl={article.imageUrl}
                title={article.title}
                author={article.author}
                readTime={article.readTime}
              />
            ))}
          </div>
        </section>
      </div>
      <style jsx>{`
        .main-container {
          padding: 60px 60px;
          background: #111;
        }
        .blog-header {
          align-self: start;
          z-index: 10;
          margin-top: -67px;
        }
        .blog-title {
          color: #fff;
          font: 700 81px/1 Clash Display Variable, -apple-system, Roboto,
            Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .blog-title {
            max-width: 100%;
            font-size: 40px;
          }
        }

        .insights-container {
          display: flex;
          margin-top: 81px;
          width: 100%;
          flex-direction: column;
          justify-content: start;
        }

        @media (max-width: 991px) {
          .insights-container {
            max-width: 100%;
            margin-top: 40px;
          }
        }

        .insights-header {
          display: flex;
          width: 100%;
          align-items: start;
          gap: 40px 100px;
          color: #fff;
          justify-content: space-between;
          flex-wrap: wrap;
          font: 500 28px/1 "Clash Display", -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        @media (max-width: 991px) {
          .insights-header {
            max-width: 100%;
          }
        }

        .insights-grid {
          display: flex;
          margin-top: 29px;
          width: 100%;
          align-items: start;
          gap: 40px 94px;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        @media (max-width: 991px) {
          .insights-grid {
            max-width: 100%;
          }
        }

        .article-card {
          display: flex;
          min-width: 240px;
          flex-direction: column;
          justify-content: start;
          width: 448px;
        }

        @media (max-width: 991px) {
          .article-card {
            max-width: 100%;
          }
        }

        .image-wrapper {
          display: flex;
          width: 100%;
          flex-direction: column;
          overflow: hidden;
        }

        @media (max-width: 991px) {
          .image-wrapper {
            max-width: 100%;
          }
        }

        .article-image {
          aspect-ratio: 1.9;
          object-fit: contain;
          object-position: center;
          width: 100%;
          border-radius: 14px;
        }

        @media (max-width: 991px) {
          .article-image {
            max-width: 100%;
          }
        }

        .article-title {
          display: flex;
          margin-top: 14px;
          width: 100%;
          flex-direction: column;
          color: #fff;
          justify-content: start;
          font: 600 29px/40px Sora, sans-serif;
        }

        @media (max-width: 991px) {
          .article-title {
            max-width: 100%;
          }
        }

        .article-meta {
          display: flex;
          margin-top: 14px;
          width: 100%;
          align-items: center;
          justify-content: start;
          flex-wrap: wrap;
        }

        @media (max-width: 991px) {
          .article-meta {
            max-width: 100%;
          }
        }

        .author-name {
          color: #fff;
          font: 600 19px/1 Inter, sans-serif;
        }

        .read-time {
          display: flex;
          align-items: center;
          justify-content: start;
          height: 100%;
        }

        .read-time-icon {
          display: flex;
          min-height: 19px;
          width: 19px;
          flex-direction: column;
          overflow: hidden;
          justify-content: center;
        }

        .read-time-text {
          color: #fff;
          font: 400 17px/1 Inter, sans-serif;
        }
      `}</style>
    </>
  );
};

export default BlogAndResources;