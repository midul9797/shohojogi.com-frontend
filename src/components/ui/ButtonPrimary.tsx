import React from "react";
import "@/styles/ButtonPrimary.css";
export default function ButtonPrimary({
  text,
  height = "40px",
  width = "100px",
}: {
  text: string;
  height?: string;
  width?: string;
}) {
  return (
    <button className="button type1" style={{ width: width, height: height }}>
      <span className="btn-txt">{text}</span>
    </button>
  );
}
