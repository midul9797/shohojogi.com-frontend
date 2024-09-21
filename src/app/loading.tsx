"use client";
import dynamic from "next/dynamic";
import React from "react";
import animatation from "@/assets/loading_shohojogi.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
