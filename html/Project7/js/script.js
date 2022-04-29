const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () =>
  container.classList.add("hover-left")
);
left.addEventListener("mouseleave", () =>
  container.classList.remove("hover-left")
);

right.addEventListener("mouseenter", () =>
  container.classList.add("hover-right")
);
right.addEventListener("mouseleave", () =>
  container.classList.remove("hover-right")
);
// ..............................................

const left2 = document.querySelector(".left2");
const right2 = document.querySelector(".right2");
const container2 = document.querySelector(".container2");

left2.addEventListener("mouseenter", () =>
  container2.classList.add("hover-left2")
);
left2.addEventListener("mouseleave", () =>
  container2.classList.remove("hover-left2")
);

right2.addEventListener("mouseenter", () =>
  container2.classList.add("hover-right2")
);
right2.addEventListener("mouseleave", () =>
  container2.classList.remove("hover-right2")
);

// ..................................................................................................................................

const left3 = document.querySelector(".left3");
const right3 = document.querySelector(".right3");
const container3 = document.querySelector(".container3");

left3.addEventListener("mouseenter", () =>
  container3.classList.add("hover-left3")
);
left3.addEventListener("mouseleave", () =>
  container3.classList.remove("hover-left3")
);

right3.addEventListener("mouseenter", () =>
  container3.classList.add("hover-right3")
);
right3.addEventListener("mouseleave", () =>
  container3.classList.remove("hover-right3")
);
