const textList = [
  `Lorem ipsum dolor sit amet consectetur adit asperiores`,
  `Lorem i sit amet consectetur adit asperiores2`,
  `Lorem ipsum dolor sit amet consectetur adit asperiores3`,
];

let [defaultMinutes, defaultSec] = [0, 0];
// Target all time
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
// Input
const input = document.getElementById("input");
const btn = document.getElementById("btn");
// Text
const text = document.getElementById("text");
text.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dicta porro id ipsa voluptates illo sint maiores eveniet ut asperiores.`;

let miliSec = null;
let sec = null;
let minute = null;
let hour = null;
let start = false;

input.addEventListener("input", () => {
  if (text.innerHTML.length !== input.value.length) {
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.7";
  } else {
    btn.style.pointerEvents = "auto";
    btn.style.opacity = "1";
  }
  if (text.innerHTML.substring(0, input.value.length) === input.value) {
    text.style.color = "#1c7000";
  } else {
    text.style.color = "#f34a90";
  }
});

// Initial value null and after click the start button the value will be setInterval

// Toggle button means start and stop occurs just click single button
const toggle = () => {
  if (btn.innerHTML === "Start") {
    btn.innerHTML = "Submit";
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    [defaultMinutes, defaultSec] = [0, 0];
    input.value = "";
    input.removeAttribute("disabled");
    sec = setInterval(secFunc, 1000);
    minute = setInterval(minuteFunc, 60000);
    btn.style.pointerEvents = "none";
    btn.style.opacity = "0.7";
  } else {
    clearInterval(miliSec);
    clearInterval(sec);
    clearInterval(minute);
    clearInterval(hour);
    btn.innerHTML = "Start";
    text.innerHTML = textList[Math.round(Math.random() * textList.length - 1)];
    input.setAttribute("disabled", true);
  }
};

function secFunc() {
  if (defaultSec === 59) {
    defaultSec = 0;
  }
  defaultSec++;
  seconds.innerHTML = defaultSec;
}

function minuteFunc() {
  if (defaultMinutes === 60) {
    defaultMinutes = 0;
  }
  defaultMinutes++;
  minutes.innerHTML = defaultMinutes;
}
