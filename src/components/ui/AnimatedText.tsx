"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
type AnimatedTextProps = {
  text: string | string[];
  style?: React.CSSProperties;
};

export default function AnimatedText({ text, style = {} }: AnimatedTextProps) {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <p style={style} className="gradient-span">
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      >
        {text}
      </span>
      <motion.span
        aria-hidden
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        {textArray.map((line) => (
          <span key={line} style={{ display: "block" }}>
            {line.split(" ").map((word) => (
              <span key={word} style={{ display: "inline-block" }}>
                {word.split("").map((char) => (
                  <motion.span
                    variants={defaultAnimations}
                    key={char}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
                <span style={{ display: "inline-block" }}>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </p>
  );
}
