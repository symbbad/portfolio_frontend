export const calculateScrollZoom = (scrollY: number) => {
    const baseScale = 1;
    const scaleIncrement = scrollY * 0.002;
    return baseScale + scaleIncrement;
  };