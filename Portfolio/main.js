let header = document.querySelector(".main_nav");

window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add("bg");
  } else {
    header.classList.remove("bg");
  }
};
