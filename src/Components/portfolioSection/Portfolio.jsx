import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Projects
const projects = [
  {
    id: 1,
    title: "Zerogateway",
    description:
      "Unlock access to QR code, payment links, plugin, and APIs, enabling you to seamlessly accept both free and unlimited payments.",
    tags: ["UI/UX DESIGN", "WEBSITE DEVELOPMENT", "WEBSITE DEVELOPMENT"],
    imageUrl:
      "https://blentops-web.inddev.in/wp-content/images/CarlMockup.webp",
    link: "#",
  },
  {
    id: 2,
    title: "Cricblaze",
    description:
      "CricBlaze is the best live cricket score app that delivers real-time cricket scores, updates, and live match action.",
    tags: ["UI/UX DESIGN", "WEBSITE DEVELOPMENT", "DESIGN", "VIDEO ANIMATION"],
    imageUrl:
      "https://blentops-web.inddev.in/wp-content/images/speedcat-hero.webp",
    link: "#",
  },
];

const PortfolioSection = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const minScale = 0.95;
      const maxScroll = 500;
      const scrollY = Math.min(window.scrollY, maxScroll);
      const newScale = 1 - ((1 - minScale) * (scrollY / maxScroll));
      setScale(newScale);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio-section">
      <div className="e-con-inner">
        <h2 className="section-heading">Selected Work</h2>

        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={30}
          slidesPerView={2}
          loop
          pagination={{ clickable: true }}
          className="portfolio-swiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="portfolio-item">
                {/* Static Background */}
                <div className="portfolio-background" />
                {/* Only inner image scales */}
                <div
                  className="portfolio-image"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    transform: `scale(${scale})`,
                  }}
                />
                <div className="portfolio-overlay" />
                <div className="portfolio-tags">
                  <span className="tag-str">
                    {project.tags.join(", ")}
                  </span>
                </div>
                <div className="portfolio-content">
                  <h4>
                    <a href={project.link}>{project.title}</a>
                  </h4>
                  <p className="description">{project.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="portfolio-button">
          <a href="#">Our Portfolio of Success</a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
