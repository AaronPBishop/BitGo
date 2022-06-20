// Minutes and seconds
let currentMinute = document.getElementById("current-minute");
let currentSecond = document.getElementById("current-second");

let buttons = document.querySelector(".buttons");

// Row 1
let r1c1 = document.getElementById("row1-col1");
let r1c2 = document.getElementById("row1-col2");
let r1c3 = document.getElementById("row1-col3");
let r1c4 = document.getElementById("row1-col4");

// Row 2
let r2c1 = document.getElementById("row2-col1");
let r2c2 = document.getElementById("row2-col2");
let r2c3 = document.getElementById("row2-col3");
let r2c4 = document.getElementById("row2-col4");

// Row 3
let r3c1 = document.getElementById("row3-col1");
let r3c2 = document.getElementById("row3-col2");
let r3c3 = document.getElementById("row3-col3");
let r3c4 = document.getElementById("row3-col4");

// Row 4
let r4c1 = document.getElementById("row4-col1");
let r4c2 = document.getElementById("row4-col2");
let r4c3 = document.getElementById("row4-col3");
let r4c4 = document.getElementById("row4-col4");

//Timer
let seconds = 0;
const timer = (val) => {
  return val > 9 ? val : "0" + val;
};

setInterval(() => {
  currentMinute.innerHTML = timer(parseInt(seconds / 60, 10));
  currentSecond.innerHTML = timer(++seconds % 60);
}, 1000);

timer();

// Tile matrix
let matrix = [
  [r1c1, r1c2, r1c3, r1c4],
  [r2c1, r2c2, r2c3, r2c4],
  [r3c1, r3c2, r3c3, r3c4],
  [r4c1, r4c2, r4c3, r4c4],
];

// Single-click Event Handlers - Row 1
const r1c1_singleClick = () => {
  if (r1c1.style.backgroundColor === "rgb(41, 38, 38)") {
    r1c1.style.backgroundColor = "red";
  } else if (r1c1.style.backgroundColor === "red") {
    r1c1.style.backgroundColor = "blue";
  } else {
    r1c1.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r1c2_singleClick = () => {
  if (r1c2.style.backgroundColor === "rgb(41, 38, 38)") {
    r1c2.style.backgroundColor = "red";
  } else if (r1c2.style.backgroundColor === "red") {
    r1c2.style.backgroundColor = "blue";
  } else {
    r1c2.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r1c3_singleClick = () => {
  if (r1c3.style.backgroundColor === "rgb(41, 38, 38)") {
    r1c3.style.backgroundColor = "red";
  } else if (r1c3.style.backgroundColor === "red") {
    r1c3.style.backgroundColor = "blue";
  } else {
    r1c3.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r1c4_singleClick = () => {
  if (r1c4.style.backgroundColor === "rgb(41, 38, 38)") {
    r1c4.style.backgroundColor = "red";
  } else if (r1c4.style.backgroundColor === "red") {
    r1c4.style.backgroundColor = "blue";
  } else {
    r1c4.style.backgroundColor = "rgb(41, 38, 38)";
  };
};

// Single-click Event Handlers - Row 2
const r2c1_singleClick = () => {
  if (r2c1.style.backgroundColor === "rgb(41, 38, 38)") {
    r2c1.style.backgroundColor = "red";
  } else if (r2c1.style.backgroundColor === "red") {
    r2c1.style.backgroundColor = "blue";
  } else {
    r2c1.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r2c2_singleClick = () => {
  if (r2c2.style.backgroundColor === "rgb(41, 38, 38)") {
    r2c2.style.backgroundColor = "red";
  } else if (r2c2.style.backgroundColor === "red") {
    r2c2.style.backgroundColor = "blue";
  } else {
    r2c2.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r2c3_singleClick = () => {
  if (r2c3.style.backgroundColor === "rgb(41, 38, 38)") {
    r2c3.style.backgroundColor = "red";
  } else if (r2c3.style.backgroundColor === "red") {
    r2c3.style.backgroundColor = "blue";
  } else {
    r2c3.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r2c4_singleClick = () => {
  if (r2c4.style.backgroundColor === "rgb(41, 38, 38)") {
    r2c4.style.backgroundColor = "red";
  } else if (r2c4.style.backgroundColor === "red") {
    r2c4.style.backgroundColor = "blue";
  } else {
    r2c4.style.backgroundColor = "rgb(41, 38, 38)";
  };
};

// Single-click Event Handlers - Row 3
const r3c1_singleClick = () => {
  if (r3c1.style.backgroundColor === "rgb(41, 38, 38)") {
    r3c1.style.backgroundColor = "red";
  } else if (r3c1.style.backgroundColor === "red") {
    r3c1.style.backgroundColor = "blue";
  } else {
    r3c1.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r3c2_singleClick = () => {
  if (r3c2.style.backgroundColor === "rgb(41, 38, 38)") {
    r3c2.style.backgroundColor = "red";
  } else if (r3c2.style.backgroundColor === "red") {
    r3c2.style.backgroundColor = "blue";
  } else {
    r3c2.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r3c3_singleClick = () => {
  if (r3c3.style.backgroundColor === "rgb(41, 38, 38)") {
    r3c3.style.backgroundColor = "red";
  } else if (r3c3.style.backgroundColor === "red") {
    r3c3.style.backgroundColor = "blue";
  } else {
    r3c3.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r3c4_singleClick = () => {
  if (r3c4.style.backgroundColor === "rgb(41, 38, 38)") {
    r3c4.style.backgroundColor = "red";
  } else if (r3c4.style.backgroundColor === "red") {
    r3c4.style.backgroundColor = "blue";
  } else {
    r3c4.style.backgroundColor = "rgb(41, 38, 38)";
  };
};

// Single-click Event Handlers - Row 4
const r4c1_singleClick = () => {
  if (r4c1.style.backgroundColor === "rgb(41, 38, 38)") {
    r4c1.style.backgroundColor = "red";
  } else if (r4c1.style.backgroundColor === "red") {
    r4c1.style.backgroundColor = "blue";
  } else {
    r4c1.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r4c2_singleClick = () => {
  if (r4c2.style.backgroundColor === "rgb(41, 38, 38)") {
    r4c2.style.backgroundColor = "red";
  } else if (r4c2.style.backgroundColor === "red") {
    r4c2.style.backgroundColor = "blue";
  } else {
    r4c2.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r4c3_singleClick = () => {
  if (r4c3.style.backgroundColor === "rgb(41, 38, 38)") {
    r4c3.style.backgroundColor = "red";
  } else if (r4c3.style.backgroundColor === "red") {
    r4c3.style.backgroundColor = "blue";
  } else {
    r4c3.style.backgroundColor = "rgb(41, 38, 38)";
  };
};
const r4c4_singleClick = () => {
  if (r4c4.style.backgroundColor === "rgb(41, 38, 38)") {
    r4c4.style.backgroundColor = "red";
  } else if (r4c4.style.backgroundColor === "red") {
    r4c4.style.backgroundColor = "blue";
  } else {
    r4c4.style.backgroundColor = "rgb(41, 38, 38)";
  };
};

// Single-click Event Listeners - Row 1
r1c1.addEventListener("click", r1c1_singleClick);
r1c2.addEventListener("click", r1c2_singleClick);
r1c3.addEventListener("click", r1c3_singleClick);
r1c4.addEventListener("click", r1c4_singleClick);
// Single-click Event Listeners - Row 2
r2c1.addEventListener("click", r2c1_singleClick);
r2c2.addEventListener("click", r2c2_singleClick);
r2c3.addEventListener("click", r2c3_singleClick);
r2c4.addEventListener("click", r2c4_singleClick);
// Single-click Event Listeners - Row 3
r3c1.addEventListener("click", r3c1_singleClick);
r3c2.addEventListener("click", r3c2_singleClick);
r3c3.addEventListener("click", r3c3_singleClick);
r3c4.addEventListener("click", r3c4_singleClick);
// Single-click Event Listeners - Row 4
r4c1.addEventListener("click", r4c1_singleClick);
r4c2.addEventListener("click", r4c2_singleClick);
r4c3.addEventListener("click", r4c3_singleClick);
r4c4.addEventListener("click", r4c4_singleClick);