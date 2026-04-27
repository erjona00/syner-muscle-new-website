"use client";

import { useEffect, useState } from "react";

export default function DownloadPage() {
  const [platform, setPlatform] = useState("loading"); 
  // "mobile" | "desktop" | "loading"

  useEffect(() => {
    const ua = navigator.userAgent;

    if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.href =
        "https://apps.apple.com/us/app/synermuscle-workout-tracker/id6760599921";
      setPlatform("mobile");
    } 
    else if (/Android/i.test(ua)) {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.fitness.synermuscle";
      setPlatform("mobile");
    } 
    else {
      setPlatform("desktop");
    }
  }, []);

  // 🚫 Mos shfaq asgjë në mobile
  if (platform === "mobile") return null;

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        textAlign: "center",
      }}
    >
      <h1>Download SynerMuscle App</h1>

      <p>Choose your platform:</p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <a
          href="https://apps.apple.com/us/app/synermuscle-workout-tracker/id6760599921"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            width={160}
          />
        </a>

        <a
          href="https://play.google.com/store/apps/details?id=com.fitness.synermuscle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            width={160}
          />
        </a>
      </div>
    </div>
  );
}