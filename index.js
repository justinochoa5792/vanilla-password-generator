const passwordBox = document.getElementById("password");
const btn = document.querySelector(".btn");
const copy = document.querySelector(".generate");
const length = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmonpqrstuvwxyz";
const number = "0123456789";
const allChars = upperCase + lowerCase + number;

function generateRandomPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
}

btn.addEventListener("click", () => {
  generateRandomPassword();
});

copy.addEventListener("click", () => {
  copyPassword();
});

function copyPassword() {
  passwordBox.select();
  navigator.clipboard.writeText("text to be copied");
}
