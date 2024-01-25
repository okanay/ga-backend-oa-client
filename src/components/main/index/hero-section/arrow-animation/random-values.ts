export const getMaxWidth = () => {
  const screenWidth = window.innerWidth;

  const minWidth = 5;
  const maxWidth = 40;
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

  const minHeight = 5;
  const maxHeight = 40;
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
