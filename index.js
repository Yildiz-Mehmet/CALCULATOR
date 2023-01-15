const content = document.querySelectorAll(".content");
const header1 = document.querySelector(".header1");
const header2 = document.querySelector(".header2");
let screen = [];
let result = [];
let result1 = "";
content.forEach((x) => {
  x.addEventListener("click", () => {
    let number = x.innerHTML;

    if (number === "=") {
      result1 = eval(result);

      header2.innerHTML = result1;
      header1.innerHTML = result + "=";
      result = result1;
    } else if (number === "AC") {
      window.location.reload();
    } else {
      screen = [];
      screen.push(result);
      screen.push(number);
      result = screen.join("");
      header2.innerHTML = result;
    }
  });
});
