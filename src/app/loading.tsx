"use client";
import Lottie from "lottie-react";
import React from "react";
import animatation from "@/assets/loading_shohojogi.json";
function Loading() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <Lottie
        animationData={animatation}
        loop={true}
        style={{ width: "75px", height: "75px" }}
      />
    </div>
  );
}

export default Loading;
