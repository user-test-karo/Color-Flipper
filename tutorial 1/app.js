var istatus = document.querySelector("h4");
const remove = document.querySelector(".remove");

var button = document.querySelector(".add");
const message = document.querySelector(".msg");

button.addEventListener("click", function () {
  istatus.innerHTML = "Following";
  istatus.style.color = "rgb(11, 250, 11)";
  remove.style.backgroundColor = "red";
  remove.style.borderColor = "red";
  button.innerHTML = "Added";
  button.style.display = "none";
  remove.style.display = "inline";
  message.style.display = "inline";
});

remove.addEventListener("click", function () {
  button.style.backgroundColor = "rgb(11, 250, 11)";
  button.style.borderColor = "rgb(11, 250, 11)";
  button.style.color = "white";
  istatus.innerHTML = "Not Following";
  istatus.style.color = "red";
  button.innerHTML = "Add Friend";
  button.style.display = "inline";
  remove.style.display = "none";
  message.style.display = "none";
});

const cursor = document.querySelector(".crsr");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
