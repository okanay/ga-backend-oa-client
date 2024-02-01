const handleSmoothScroll = (id: string) => {
  const top = document.getElementById(id)?.offsetTop;
  window.scrollTo({
    top: Number(top) - 100,
    behavior: "smooth",
  });
};

export { handleSmoothScroll };
