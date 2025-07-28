import React, { useEffect, useState } from "react";

const BANNER_TEXT = "Building the future of";

function TypingLettersBanner({ text, inDelay = 100, stayDelay = 2000, outDelay = 50 }) {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timer;
    if (!deleting) {
      if (displayedLength < text.length) {
        // Add next letter
        timer = setTimeout(() => setDisplayedLength(displayedLength + 1), inDelay);
      } else {
        // Full text shown, start deleting after pause
        timer = setTimeout(() => setDeleting(true), stayDelay);
      }
    } else {
      if (displayedLength > 0) {
        // Remove last letter
        timer = setTimeout(() => setDisplayedLength(displayedLength - 1), outDelay);
      } else {
        // All removed, start typing after brief pause
        timer = setTimeout(() => setDeleting(false), stayDelay / 2);
      }
    }
    return () => clearTimeout(timer);
  }, [displayedLength, deleting, text.length, inDelay, stayDelay, outDelay]);

  return (
    <span style={{ display: "inline-flex", flexWrap: "wrap" }}>
      {text.split("").map((letter, idx) => (
        <span 
          key={idx} 
          style={{
            display: "inline-block",
            padding: "2px 1px",
            borderRadius: 2,
            backgroundColor: idx < displayedLength ? "#e6366e" : "transparent",
            color: "#fff",
            transition: "background-color 0.2s ease",
            opacity: idx < displayedLength ? 1 : 0,
            transform: `translateY(${idx < displayedLength ? 0 : 10}px)`,
            transition: "all 0.3s ease"
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}

export default function HeroSection() {
  const [btnHover, setBtnHover] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: "radial-gradient(circle at 70% 0%, #e6366e 40%, #101214 100%)",
        fontFamily: "'Montserrat', Arial, sans-serif",
        color: "#fff",
        display: "flex",
        flexDirection: "column"
      }}
    >
      {/* Top row: logo and Hamburger */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 32,
        fontFamily: "inherit"
      }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://assets.website-files.com/5f4e9dc2714d0a0eba756370/61d5711d61f1a00d7741bfbc_logo-primary.png"
            alt="lentops logo"
            width={28}
            height={28}
            style={{ marginRight: 10 }}
          />
          <span style={{
            fontWeight: 700,
            fontSize: 24,
            color: "#fff"
          }}>lentops</span>
        </div>
        {/* Hamburger */}
        <div
          role="button"
          tabIndex={0}
          aria-label="menu"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            cursor: "pointer",
            width: 36
          }}
        >
          <span style={{ height: 3, borderRadius: 2, background: "#fff", width: 28, display: "block" }} />
          <span style={{ height: 3, borderRadius: 2, background: "#fff", width: 17, display: "block" }} />
        </div>
      </div>
      {/* Centered content */}
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 20px"
      }}>
        {/* Banner headline */}
        <div
          style={{
            display: "inline-block",
            marginBottom: 16,
            marginTop: 12,
            textAlign: "center"
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(32px, 8vw, 64px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-.5px",
              fontFamily: "'Montserrat', Arial, sans-serif",
              color: "#fff"
            }}
          >
            <TypingLettersBanner text={BANNER_TEXT} />
          </span>
        </div>
        {/* Static bottom line */}
        <div
          style={{
            fontSize: "clamp(32px, 8vw, 64px)",
            fontWeight: 700,
            fontFamily: "'Montserrat', Arial, sans-serif",
            color: "#fff",
            marginTop: 0,
            marginBottom: 28,
            lineHeight: 1.1,
            letterSpacing: "-.5px",
            textAlign: "center"
          }}
        >
          Digital Products.
        </div>
        {/* Subtitle */}
        <div
          style={{
            color: "#e1e3e5",
            fontSize: "clamp(16px, 2.5vw, 20px)",
            fontWeight: 400,
            lineHeight: 1.5,
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 44px auto",
            padding: "0 20px"
          }}
        >
          We create innovative, scalable, and secure digital platforms that transform industries and enhance user experiences across fintech, gaming, and sports technology.
        </div>
        {/* Button */}
        <a
          href="#"
          onMouseEnter={() => setBtnHover(true)}
          onMouseLeave={() => setBtnHover(false)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            border: "2px solid #fff",
            borderRadius: 999,
            padding: "15px 44px",
            backgroundColor: btnHover ? "#fff" : "transparent",
            color: btnHover ? "#181a1f" : "#fff",
            fontWeight: 500,
            fontSize: 18,
            textDecoration: "none",
            fontFamily: "'Montserrat', Arial, sans-serif",
            cursor: "pointer",
            transition: "all 0.22s cubic-bezier(.55,.1,.41,.89)"
          }}
        >
          <span style={{ letterSpacing: "0.03em" }}>KNOW MORE</span>
          <span
            style={{
              marginLeft: 13,
              fontSize: 22,
              fontWeight: 400,
              display: "inline-block",
              transform: "rotate(-45deg)",
              transition: "color 0.22s",
              color: btnHover ? "#181a1f" : "#fff"
            }}
            aria-hidden="true"
          >&#8599;</span>
        </a>
      </div>
    </div>
  );
}