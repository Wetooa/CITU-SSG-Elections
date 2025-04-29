// utils/animations.ts
export const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeDown = {
  initial: { opacity: 0, y: -30 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -30 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const fadeRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },
  transition: { duration: 0.5, ease: "easeOut" },
};

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.4, ease: "easeOut" },
};

export const slideIn = (
  direction: "left" | "right" | "up" | "down" = "up",
  distance = 100,
) => {
  const variants = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
  };

  return {
    initial: { opacity: 0, ...variants[direction] },
    animate: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, ...variants[direction] },
    transition: { duration: 0.5, ease: "easeOut" },
  };
};
