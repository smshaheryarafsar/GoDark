"use client";
import Slider from "./Slider/index";
import AboutUs from "./About/index";
import Overview from "./Overview/index";
import Soltuions from ".//Solution/index";
import Choose from "./ChooseUs/index";
import Values from "./Value/index";
import Contact from "./Contact/index";
import Blog from "./Blog/index";
import Ending from "./Ending/index";
import Footer from "./Footer/index";
import Header from "./Header/index";

export default function Home() {
  return (
    <>
      <div className="font-clash-display-variable">
        <Header />
        <Slider />
        <AboutUs companyName={"Godark.ai"} />
        <Overview />
        <Soltuions />
        <Choose />
        <Values />
        <Contact
          backgroundImageSrc={
            "https://cdn.builder.io/api/v1/image/assets/TEMP/f7fb893bbd0da50965b217abb4a67149cc0032f642cdac6b4f7ee0d501538017?placeholderIfAbsent=true&apiKey=2daa08173b524f8da8f7281d62378a63"
          }
        />
        <Blog />
        <Ending
          title={"Whitepapers and Guides"}
          content={
            "Offer in-depth guides and white papers on key topics such as inventory management, digital marketing strategies for restaurants, and optimising kitchen operations using AI."
          }
          imageSrc={
            "https://cdn.builder.io/api/v1/image/assets/TEMP/af5c9271b19ddefccdbe1c11d5f2dcfa7aff15e12c07ecd0edc6381964af26c0?placeholderIfAbsent=true&apiKey=2daa08173b524f8da8f7281d62378a63"
          }
        />
        <Footer copyrightYear={2024} companyName={"Godark.ai"} />
      </div>
    </>
  );
}
