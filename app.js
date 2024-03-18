const code = document.querySelector(".color");

const bg = document.querySelector("body");

const getColor = () => {
  const randomNum = Math.floor(Math.random() * 16777215);
  const haxcode = "#" + randomNum.toString(16);
  console.log(haxcode);
  bg.style.backgroundColor = haxcode;
  code.innerHTML = haxcode.toUpperCase();
};

document.querySelector(".btn").addEventListener("click", () => {
  getColor();
});
