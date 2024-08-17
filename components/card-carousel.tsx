"use client";

import React, { useState, useCallback } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { cn } from "@/lib/utils";

interface SlideData {
  title: string;
  description: string;
  imageUrl: string;
  currentClients: number;
  totalProjects: number;
}

const slideDataArray: SlideData[] = [
  {
    title: "Search Engine Optimization",
    description:
      "Enhance your website's visibility on search engines by implementing effective SEO strategies. By optimizing your site for search engines, you'll attract more organic traffic, improve your search engine rankings, and ultimately drive more qualified leads to your business, increasing conversions.",
    imageUrl: "/google-ads.png",
    currentClients: 220,
    totalProjects: 150,
  },
  {
    title: "Social Media Management",
    description:
      "Effectively manage your brand's social media presence across multiple platforms to increase engagement and reach. By consistently posting relevant content, interacting with your audience, and monitoring performance, you can build a strong online community and drive meaningful interactions with your brand.",
    imageUrl: "/social-media-management.png",
    currentClients: 200,
    totalProjects: 130,
  },
  {
    title: "Email Marketing",
    description:
      "Utilize targeted email campaigns to connect with your audience on a personal level. By sending relevant and timely messages, you can nurture leads, promote products, and keep your customers informed, all while driving higher engagement rates and encouraging repeat business from your subscribers.",
    imageUrl: "/email-marketing.png",
    currentClients: 190,
    totalProjects: 140,
  },
  {
    title: "Conversion Rate Optimization",
    description:
      "Increase the percentage of website visitors who take desired actions, such as making a purchase or filling out a form. By analyzing user behavior and optimizing your site accordingly, you can remove obstacles, improve the user experience, and ultimately boost your conversion rates significantly.",
    imageUrl: "/cro.png",
    currentClients: 175,
    totalProjects: 125,
  },
  {
    title: "Pay-Per-Click Advertising",
    description:
      "Maximize your online presence and drive immediate traffic with PPC advertising. By bidding on relevant keywords, you can ensure your ads appear in front of potential customers who are actively searching for products or services like yours, leading to higher click-through rates and increased sales.",
    imageUrl: "/ppc.png",
    currentClients: 210,
    totalProjects: 145,
  },
  {
    title: "Analytics and Reporting",
    description:
      "Gain valuable insights into your marketing efforts with detailed analytics and reporting. By tracking key performance indicators, you can measure the effectiveness of your campaigns, identify areas for improvement, and make data-driven decisions that lead to better results and a higher return on investment.",
    imageUrl: "/analytics-reporting.png",
    currentClients: 185,
    totalProjects: 135,
  },
];

const CardCarousel: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState<number>(0);
  const [enableSwipe, setEnableSwipe] = useState<boolean>(true);
  const [animationConfig, setAnimationConfig] = useState(config.slow);

  const slides = slideDataArray.map((slide, index) => ({
    key: index,
    content: (
      <div className="h-fit w-[400px] custom-border rounded-sm p-4 text-white">
        <div className="relative h-[220px] w-full overflow-hidden ">
          <div
            className="bg-cover bg-center w-full h-full rounded-lg"
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
          ></div>
        </div>
        <div>
          <h1 className="text-xl font-bold text-center py-2">{slide.title}</h1>
          <p className="text-base text-justify pb-6">{slide.description}</p>
          <div className="flex items-center justify-between ">
            <div className="text-center">
              <h3 className="text-lg font-medium">Current Client</h3>
              <p className="text-lg font-bold">{slide.currentClients}</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg">Total Project Complete</h3>
              <p className="text-lg font-bold">{slide.totalProjects}</p>
            </div>
          </div>
        </div>
      </div>
    ),
    onClick: () => setGoToSlide(index),
  }));

  const handleTouchStart = useCallback(
    (evt: React.TouchEvent) => {
      if (!enableSwipe) return;

      const firstTouch = evt.touches[0];
      const { clientX: xDown, clientY: yDown } = firstTouch;
      (evt.currentTarget as HTMLElement).setAttribute(
        "data-xDown",
        xDown.toString()
      );
      (evt.currentTarget as HTMLElement).setAttribute(
        "data-yDown",
        yDown.toString()
      );
    },
    [enableSwipe]
  );

  const handleTouchMove = useCallback(
    (evt: React.TouchEvent) => {
      if (!enableSwipe) return;

      const xDown = parseFloat(
        (evt.currentTarget as HTMLElement).getAttribute("data-xDown") || "0"
      );
      const yDown = parseFloat(
        (evt.currentTarget as HTMLElement).getAttribute("data-yDown") || "0"
      );

      if (!xDown || !yDown) return;

      const xUp = evt.touches[0].clientX;
      const yUp = evt.touches[0].clientY;

      const xDiff = xDown - xUp;
      const yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
          setGoToSlide((prev) => Math.min(prev + 1, slides.length - 1)); // left swipe
        } else {
          setGoToSlide((prev) => Math.max(prev - 1, 0)); // right swipe
        }
      }

      (evt.currentTarget as HTMLElement).removeAttribute("data-xDown");
      (evt.currentTarget as HTMLElement).removeAttribute("data-yDown");
    },
    [enableSwipe, slides.length]
  );

  return (
    <div
      className="container mx-auto md:w-3/4 lg:w-full h-[590px] m-0"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <Carousel
        slides={slides}
        goToSlide={goToSlide}
        offsetRadius={500}
        showNavigation={false}
        animationConfig={animationConfig}
      />

      {/* active card pagination */}
      <div className="flex justify-center mt-5">
        {slides.map((slide, index) => (
          <div
            key={slide.key}
            className={cn(
              "w-4 h-4 mx-1 rounded-full",
              goToSlide === index ? "bg-[#e025ce]" : "bg-gray-300"
            )}
            onClick={slide.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
