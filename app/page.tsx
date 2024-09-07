"use client"; // This marks the component as a Client Component

import { CSSProperties } from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.animatedBackground}></div>
      <h1 style={styles.helloText}>
        Hello <span style={styles.worldText}>World</span>
      </h1>
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#000", // Dark background
    color: "#fff",
    fontFamily: "'Poppins', sans-serif", // Clean and modern font
  } as CSSProperties,

  animatedBackground: {
    position: "absolute",
    width: "200%",
    height: "200%",
    background:
      "radial-gradient(circle, rgba(0, 255, 255, 0.4), rgba(255, 0, 255, 0.4))",
    animation: "backgroundShift 10s infinite alternate",
    zIndex: 0,
  } as CSSProperties,

  helloText: {
    position: "relative",
    fontSize: "6rem",
    zIndex: 1,
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "0.5rem",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.7), 0 0 20px rgba(255, 255, 255, 0.5)", // Glowing effect
    transition: "transform 0.3s ease, color 0.3s ease",
  } as CSSProperties,

  worldText: {
    color: "#0ff", // Cyan color for "World"
    transition: "transform 0.3s ease, color 0.3s ease",
    fontSize: "6rem",
    fontWeight: "bold",
    background:
      "linear-gradient(45deg, rgba(255, 0, 255, 1), rgba(0, 255, 255, 1))",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
  } as CSSProperties,

  // Hover effects on the entire text
  hoverText: {
    ":hover": {
      transform: "scale(1.05) rotate(5deg)", // Add slight scale and rotation
      color: "#f0f", // Change color to purple
    },
  } as CSSProperties,
};
