import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const lines = [
  "At Blentops, we are more than just a creative marketing agency—we are disruptors.",
  "We challenge the conventional, pushing boundaries to redefine what's possible.",
  "With a blend of strategy, creativity, and technology,",
  "we craft experiences that leave a lasting impression."
];

const AbouttopSection = () => {
  const [visibleLines, setVisibleLines] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const top = ref.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const totalLines = lines.length;
      const scrollRatio = Math.min(1, (windowHeight - top + 100) / windowHeight);
      const lineCount = Math.floor(scrollRatio * totalLines);
      setVisibleLines(lineCount);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container" ref={ref}>
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0.2, y: 20 }}
            animate={i < visibleLines ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 20 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`about-line ${i < visibleLines ? 'visible' : 'faded'}`}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default AbouttopSection;
