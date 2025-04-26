document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("scene");
  const ctx = canvas.getContext("2d");

  const bgRadios = document.querySelectorAll('input[name="bg"]');
  const guitarCheck = document.getElementById("guitarCheck");
  const keyboardCheck = document.getElementById("keyboardCheck");
  const micCheck = document.getElementById("micCheck");

  const guitarX = document.getElementById("guitarX");
  const guitarY = document.getElementById("guitarY");
  const keyboardX = document.getElementById("keyboardX");
  const keyboardY = document.getElementById("keyboardY");
  const micX = document.getElementById("micX");
  const micY = document.getElementById("micY");

  const sound1 = new Audio("./assets/guitar.wav");
  const sound2 = new Audio("./assets/piano.wav");
  const sound3 = new Audio("./assets/sing.wav");

  const bgImages = {
    studio: "./assets/bg-img1.avif",
    classroom: "./assets/bg-img2.jpg",
    stage: "./assets/bg-img3.jpg"
  };

  const guitarImg = new Image();
  guitarImg.src = "./assets/guitar.png";

  const keyboardImg = new Image();
  keyboardImg.src = "./assets/keyboard.png";

  const micImg = new Image();
  micImg.src = "./assets/mic.png";

  function getSelectedBackground() {
    for (const radio of bgRadios) {
      if (radio.checked) return radio.value;
    }
    return "studio";
  }

  function drawScene() {
    const bgSrc = bgImages[getSelectedBackground()];
    const bg = new Image();
    bg.src = bgSrc;

    bg.onload = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

      if (guitarCheck.checked) {
        ctx.drawImage(guitarImg, parseInt(guitarX.value), parseInt(guitarY.value), 100, 100);
      }
      if (keyboardCheck.checked) {
        ctx.drawImage(keyboardImg, parseInt(keyboardX.value), parseInt(keyboardY.value), 120, 80);
      }
      if (micCheck.checked) {
        ctx.drawImage(micImg, parseInt(micX.value), parseInt(micY.value), 50, 150);
      }
    };
  }

  bgRadios.forEach(radio => radio.addEventListener("change", drawScene));
  [guitarCheck, keyboardCheck, micCheck].forEach(el => el.addEventListener("change", drawScene));
  [guitarX, guitarY, keyboardX, keyboardY, micX, micY].forEach(slider => slider.addEventListener("input", drawScene));

  document.getElementById("sound1").addEventListener("click", () => sound1.play());
  document.getElementById("sound2").addEventListener("click", () => sound2.play());
  document.getElementById("sound3").addEventListener("click", () => sound3.play());

  document.getElementById("homeButton").addEventListener("click", () => {
    window.location.href = "../index.html";
  });

  drawScene();
});
