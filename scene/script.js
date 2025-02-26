function homeButton() {
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("homeButton").addEventListener("click", function () {
      window.location.href = "../index.html";
    });
  });
}

function drawScene() {
  const canvas = document.getElementById("scene");
  const ctx = canvas.getContext("2d");

  const bgImg = new Image();
  const fgImg1 = new Image();
  const fgImg2 = new Image();

  bgImg.src = "./images/sky-bg.jpg";
  fgImg1.src = "./images/sun-fg.png";
  fgImg2.src = "./images/birds-fg.png";

  let imagesLoaded = 0;

  function onImageLoad() {
    imagesLoaded++;
    if (imagesLoaded === 3) {
      renderScene();
    }
  }

  bgImg.onload = onImageLoad;
  fgImg1.onload = onImageLoad;
  fgImg2.onload = onImageLoad;

  function renderScene() {
    ctx.drawImage(bgImg, 0, 0, canvas.width, canvas.height);

    ctx.drawImage(fgImg1, canvas.width - 1350, 50, 200, 200);
    ctx.drawImage(fgImg2, canvas.width / 2 - 100, 150);

    ctx.font = "bold 36px Arial";
    ctx.fillStyle = "yellow";
    ctx.textAlign = "center";

    ctx.fillText("A Beautiful Sunny Day", canvas.width / 2, 100);
    ctx.fillText("Huda Ayaz", canvas.width / 2, 50);
  }
}

homeButton();
drawScene();
