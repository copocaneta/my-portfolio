export const loaderVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
  },
  in: {
    opacity: [1, 1, 1, 1, 0],
    x: ['-100vw', '-50vw', '-50vw', '-50vw', '200vw'],
  },
  out: {
    x: '100vw',
    opacity: 0,
  },
};
export const loaderTransition = {
  type: 'tween',
  ease: 'easeIn',
  // x: { delay: 4 },
};
export const pageVariants = {
  initial: {
    scale: 0.8,
    opacity: 0,
  },
  animate: {
    scale: [0.8, 1],
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
  out: {
    opacity: 0,
    scale: 0.8,
  },
};

export const pageTransition = {
  // type: 'tween',
  // ease: 'easeIn',
  // delay: 5,
  // duration: 5,
};
