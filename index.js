const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOne = document.getElementById("password-one");
let passwordTwo = document.getElementById("password-two");

function generatePassword() {
  let randomPasswordOne = "";
  let randomPasswordTwo = "";
  for (let i = 0; i < 15; i++) {
    randomPasswordOne +=
      characters[Math.floor(Math.random() * characters.length)];
    randomPasswordTwo +=
      characters[Math.floor(Math.random() * characters.length)];
  }
  passwordOne.textContent = randomPasswordOne;
  passwordTwo.textContent = randomPasswordTwo;
}

passwordOne.addEventListener("click", copyToClipboard);
passwordTwo.addEventListener("click", copyToClipboard);

function copyToClipboard(event) {
  //Get the text content of the clicked element
  const textToCopy = event.target.textContent;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Password copied to clipboard!");
    })
    .catch((err) => {
      console.error("error copying text: ", err);
    });
}
