const handleSmoothScroll = (id: string) => {
  const top = document.getElementById(id)?.offsetTop;
  window.scrollTo({
    top: Number(top) - 75,
    behavior: "smooth",
  });
};

export { handleSmoothScroll };
