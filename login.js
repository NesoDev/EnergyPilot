const body = document.body;

body.addEventListener("mousemove", (e) => {
  const x = e.clientX *100/ window.innerWidth;
  const y = e.clientY  *100/ window.innerHeight;

  body.style.background = `radial-gradient(circle at ${x}% ${y}%, #ff8c00, #ff0080)`;
});

const form = document.querySelector("#login-form");
const userIdInput = document.querySelector("#user-id");
const passwordInput = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userId = userIdInput.value;
  const password = passwordInput.value;
  console.log("User ID: ", userId);
  console.log("Password: ", password);
});

function irAHome() {
  window.location.href = "menu.html";
}