
    alert("HI");
const x = document.querySelector("p");

x.addEventListener("click", (event) => {
  x.textContent = `clicked`;
});

const target = document.getElementById("targetone");

target.addEventListener("click", (event) => {
    target.style.visibility = "hidden";
});