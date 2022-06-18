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

// Button matrix
let matrix = [
  [r1c1, r1c2, r1c3, r1c4],
  [r2c1, r2c2, r2c3, r2c4],
  [r3c1, r3c2, r3c3, r3c4],
  [r4c1, r4c2, r4c3, r4c4],
];

// class GameBoard {
//   constructor(matrix) {
//     this.matrix = matrix;
//   };

//   createMatrix(matrix) {
//     matrix = this.matrix;

//     for (let k = 0; k < matrix.length; k++) {
//       let i = matrix[k].length;
//       if (i == 0) return false;
//       else {
//         while (--i) {
//           let j = Math.floor(Math.random() * (i + 1));
//           let tempi = matrix[k][i];
//           let tempj = matrix[k][j];
//           matrix[k][i] = tempj;
//           matrix[k][j] = tempi;
//         };
//       };
//     };
//     return matrix;
//   };
// };

// Single-click Event Handlers - Row 1
const r1c1_singleClick = () => {
  r1c1.style.backgroundColor = "red";
};
const r1c2_singleClick = () => {
  r1c2.style.backgroundColor = "red";
};
const r1c3_singleClick = () => {
  r1c3.style.backgroundColor = "red";
};
const r1c4_singleClick = () => {
  r1c4.style.backgroundColor = "red";
};

// Single-click Event Handlers - Row 2
const r2c1_singleClick = () => {
  r2c1.style.backgroundColor = "red";
};
const r2c2_singleClick = () => {
  r2c2.style.backgroundColor = "red";
};
const r2c3_singleClick = () => {
  r2c3.style.backgroundColor = "red";
};
const r2c4_singleClick = () => {
  r2c4.style.backgroundColor = "red";
};

// Single-click Event Handlers - Row 3
const r3c1_singleClick = () => {
  r3c1.style.backgroundColor = "red";
};
const r3c2_singleClick = () => {
  r3c2.style.backgroundColor = "red";
};
const r3c3_singleClick = () => {
  r3c3.style.backgroundColor = "red";
};
const r3c4_singleClick = () => {
  r3c4.style.backgroundColor = "red";
};

// Single-click Event Handlers - Row 4
const r4c1_singleClick = () => {
  r4c1.style.backgroundColor = "red";
};
const r4c2_singleClick = () => {
  r4c2.style.backgroundColor = "red";
};
const r4c3_singleClick = () => {
  r4c3.style.backgroundColor = "red";
};
const r4c4_singleClick = () => {
  r4c4.style.backgroundColor = "red";
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

// Double-click Event Handlers - Row 1
const r1c1_doubleClick = () => {
  r1c1.style.backgroundColor = "blue";
};
const r1c2_doubleClick = () => {
  r1c2.style.backgroundColor = "blue";
};
const r1c3_doubleClick = () => {
  r1c3.style.backgroundColor = "blue";
};
const r1c4_doubleClick = () => {
  r1c4.style.backgroundColor = "blue";
};

// Double-click Event Handlers - Row 2
const r2c1_doubleClick = () => {
  r2c1.style.backgroundColor = "blue";
};
const r2c2_doubleClick = () => {
  r2c2.style.backgroundColor = "blue";
};
const r2c3_doubleClick = () => {
  r2c3.style.backgroundColor = "blue";
};
const r2c4_doubleClick = () => {
  r2c4.style.backgroundColor = "blue";
};

// Double-click Event Handlers - Row 3
const r3c1_doubleClick = () => {
  r3c1.style.backgroundColor = "blue";
};
const r3c2_doubleClick = () => {
  r3c2.style.backgroundColor = "blue";
};
const r3c3_doubleClick = () => {
  r3c3.style.backgroundColor = "blue";
};
const r3c4_doubleClick = () => {
  r3c4.style.backgroundColor = "blue";
};

// Double-click Event Handlers - Row 4
const r4c1_doubleClick = () => {
  r4c1.style.backgroundColor = "blue";
};
const r4c2_doubleClick = () => {
  r4c2.style.backgroundColor = "blue";
};
const r4c3_doubleClick = () => {
  r4c3.style.backgroundColor = "blue";
};
const r4c4_doubleClick = () => {
  r4c4.style.backgroundColor = "blue";
};

// Double-click Event Listeners - Row 1
r1c1.addEventListener("dblclick", r1c1_doubleClick);
r1c2.addEventListener("dblclick", r1c2_doubleClick);
r1c3.addEventListener("dblclick", r1c3_doubleClick);
r1c4.addEventListener("dblclick", r1c4_doubleClick);
// Double-click Event Listeners - Row 2
r2c1.addEventListener("dblclick", r2c1_doubleClick);
r2c2.addEventListener("dblclick", r2c2_doubleClick);
r2c3.addEventListener("dblclick", r2c3_doubleClick);
r2c4.addEventListener("dblclick", r2c4_doubleClick);
// Double-click Event Listeners - Row 3
r3c1.addEventListener("dblclick", r3c1_doubleClick);
r3c2.addEventListener("dblclick", r3c2_doubleClick);
r3c3.addEventListener("dblclick", r3c3_doubleClick);
r3c4.addEventListener("dblclick", r3c4_doubleClick);
// Double-click Event Listeners - Row 4
r4c1.addEventListener("dblclick", r4c1_doubleClick);
r4c2.addEventListener("dblclick", r4c2_doubleClick);
r4c3.addEventListener("dblclick", r4c3_doubleClick);
r4c4.addEventListener("dblclick", r4c4_doubleClick);