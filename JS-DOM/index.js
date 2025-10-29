const image = document.createElement("img");
image.src = "./2478325.jpg"; // use local image file if available
image.width = 200;
image.height = 200;
image.alt = "Book image";

const h3 = document.createElement("h3");
h3.textContent = "Title: Chemistry";

const h4 = document.createElement("h4");
h4.textContent = "Price: $500";

const btn = document.createElement("button");
btn.textContent = "Buy now";
btn.style.backgroundColor = "blue";
btn.style.color = "white";
btn.addEventListener('click', () => alert('Added to cart'));

const child = document.createElement("div");
child.className = "card";
child.appendChild(image);
child.appendChild(h3);
child.appendChild(h4);
child.appendChild(btn);

const parent = document.getElementById("root");
if (parent) parent.appendChild(child);
else console.error('Root element not found');