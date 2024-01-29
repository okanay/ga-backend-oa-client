export const getMaxWidth = () => {
  const screenWidth = window.innerWidth;

  const minWidth = 8;
  const maxWidth = 25;
  const screenFactor = 0.1;

  const randomWidthMax = Math.min(
    Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth,
    maxWidth
  );

  return Math.max(
    minWidth,
    Math.min(randomWidthMax, screenWidth * screenFactor)
  );
};

export const getMaxHeight = () => {
  const screenHeight = window.innerHeight;

  const minHeight = 10;
  const maxHeight = 30;
  const screenFactor = 0.1;

  const randomHeightMax = Math.min(
    Math.floor(Math.random() * (maxHeight - minHeight)) + minHeight,
    maxHeight
  );

  return Math.max(
    minHeight,
    Math.min(randomHeightMax, screenHeight * screenFactor)
  );
};
