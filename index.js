function scrollHandler() {
  var element = document.querySelector(".sidebar");

  var distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
  var elementHeight = element.offsetHeight;
  var scrollTop = document.documentElement.scrollTop;

  var opacity = 0.8;

  if (scrollTop > distanceToTop) {
    opacity = 0.8 - (scrollTop - distanceToTop) / elementHeight;
  }

  if (opacity >= 0) {
    element.style.opacity = opacity;
  }
}

window.addEventListener("scroll", scrollHandler);
