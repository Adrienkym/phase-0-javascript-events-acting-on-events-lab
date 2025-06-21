const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left < 360) {
    // limit based on container width
    dodger.style.left = `${left + 1}px`;
  }
}

// Add key listeners separately
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
