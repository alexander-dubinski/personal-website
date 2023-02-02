import { useAnimationFrame, motion, TargetAndTransition } from 'framer-motion';
import { useState } from 'react';

const animationDuration = 0.8; // seconds
const twinkleAnimation: TargetAndTransition = {
  opacity: [
    ...new Array(10).fill(0).map((_, i) => 1 - i * 0.05),
    ...new Array(10).fill(0).map((_, i) => 1 - 9 * 0.05 + i * 0.05),
  ],
  transition: { duration: animationDuration },
};

export interface StarryBackgroundProps {
  stars: Star[];
}

export interface Star {
  x: string;
  y: string;
  r: string;
}

export default function StarryBackground({ stars }: StarryBackgroundProps) {
  let ticker = 0;
  const [starToAnimate, setStarToAnimate] = useState<number>(0);
  useAnimationFrame((time, delta) => {
    ticker += delta;
    if (ticker > animationDuration * 1000) {
      ticker = 0;
      setStarToAnimate(Math.floor(Math.random() * stars.length));
    }
  });
  return (
    <>
      {stars.map(({ x, y, r }, i) => (
        <motion.div
          key={i}
          initial={false}
          className="box"
          style={{
            position: 'absolute',
            left: x,
            top: y,
            width: r,
            height: r,
            opacity: 1,
          }}
          animate={starToAnimate === i ? twinkleAnimation : { opacity: 1 }}
        />
      ))}
    </>
  );
}
