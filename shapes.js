const numShapes = 1000;

// element to insert shapes into
const mainEl = document.getElementsByTagName('main')[0];

for (let i = 0; i < numShapes; i++) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 400 400");
  const shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
  shape.setAttribute("d", getOrganicPath());
  shape.setAttribute("fill", getRandomColor());
  svg.appendChild(shape);
  // svg.style.transform = `translate(${getRandomPosition()}px, ${getRandomPosition()}px)`;
  mainEl.appendChild(svg);
}

function getOrganicPath() {
  const x1 = Math.floor(Math.random() * 300) + 50;
  const y1 = Math.floor(Math.random() * 300) + 50;
  const x2 = Math.floor(Math.random() * 300) + 50;
  const y2 = Math.floor(Math.random() * 300) + 50;
  const x3 = Math.floor(Math.random() * 300) + 50;
  const y3 = Math.floor(Math.random() * 300) + 50;
  const x4 = Math.floor(Math.random() * 300) + 50;
  const y4 = Math.floor(Math.random() * 300) + 50;
  const x5 = Math.floor(Math.random() * 300) + 50;
  const y5 = Math.floor(Math.random() * 300) + 50;
  const x6 = Math.floor(Math.random() * 300) + 50;
  const y6 = Math.floor(Math.random() * 300) + 50;
  return `M${x1},${y1} Q${x2},${y2} ${x3},${y3} C${x4},${y4} ${x5},${y5} ${x6},${y6} Z`;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomPosition() {
  return Math.floor(Math.random() * 800) + 50;
}
