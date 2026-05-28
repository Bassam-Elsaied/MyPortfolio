"use client";

import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

function CircularText({
  text,
  spinDuration = 20,
  onHover,
  className = "",
  letterClassName = "text-2xl font-black",
  radius = 52,
  size = 148,
  spacing = 1,
}) {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);
  const paddingTop = size / 2 - radius;
  const arc = 360 * spacing;
  const arcOffset = (360 - arc) / 2;

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    if (!onHover) return;

    const start = rotation.get();
    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={`relative m-0 mx-auto h-[200px] w-[200px] origin-center rounded-full text-center text-white ${className}`}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      {...(onHover
        ? {
            onMouseEnter: handleHoverStart,
            onMouseLeave: handleHoverEnd,
          }
        : {})}
      onUpdate={(latest) => {
        if (typeof latest.rotate === "number") {
          rotation.set(latest.rotate);
        }
      }}
    >
      {letters.map((letter, i) => {
        const angle =
          arcOffset + (letters.length > 1 ? arc / (letters.length - 1) : 0) * i;

        return (
          <span
            key={`${letter}-${i}`}
            className="absolute inset-0 flex justify-center"
            style={{ transform: `rotate(${angle}deg)`, paddingTop }}
          >
            <span
              className={`inline-block ${letterClassName}`}
            >
              {letter}
            </span>
          </span>
        );
      })}
    </motion.div>
  );
}

export default CircularText;
