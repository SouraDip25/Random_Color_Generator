const random = () => {
  let random = Math.floor(Math.random() * 16777215);

  let randomNew = "#" + random.toString(16);

  let heading = document.querySelector(".heading");
  heading.innerHTML = randomNew;

  document.body.style.backgroundColor = randomNew;

  let copy = document.querySelector(".copy");

  copy.addEventListener("click", () => {
    navigator.clipboard.writeText(randomNew);
    copy.innerHTML = "Copied"
  });
  
};

let buttonGenerate = document.querySelector(".random");
buttonGenerate.addEventListener("click", () => {
  random();
  document.querySelector(".copy").innerHTML = "Copy Color Code"
});
