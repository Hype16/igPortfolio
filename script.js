const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("elem");
  const elements = slider.getElementsByClassName("element");
  const elementWidth = elements[0].offsetWidth;
  const totalElements = elements.length;
  const sliderWidth = elementWidth * totalElements;
  let isDragging = false;
  let startPosition = 0;
  let currentTranslate = 0;

  slider.addEventListener("mousedown", function (e) {
    isDragging = true;
    startPosition = e.pageX;
    currentTranslate = parseFloat(
      window.getComputedStyle(slider).transform.split(",")[4] || 0
    );
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      const currentPosition = e.pageX;
      const translateX = Math.min(
        Math.max(
          currentTranslate + (currentPosition - startPosition),
          -(sliderWidth - elementWidth)
        ),
        0
      );
      slider.style.transform = `translateX(${translateX}px)`;
    }
  });
});

var tl = gsap.timeline();

tl.to("#page1", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
});

tl.to("#page1", {
  y: "0vh",
  duration: 1,
  delay: 1,
});
tl.to("#page1", {
  rotate: 360,
  scale: 1,
  duration: 1,
});
