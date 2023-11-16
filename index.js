window.onload = function () {
  document.querySelector(".user-image").addEventListener("mouseenter", () => {
    const shapes = document.getElementsByClassName("shape");

    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];
      shape.style.opacity = "1";
    }
  });

  document.querySelector(".user-image").addEventListener("mouseout", () => {
    const shapes = document.getElementsByClassName("shape");

    for (let i = 0; i < shapes.length; i++) {
      const shape = shapes[i];
      shape.style.opacity = "0";
    }
  });
};
