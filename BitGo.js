let buttons = document.querySelector(".buttons")

let r1c1 = document.getElementById("row1-col1");
let r1c2 = document.getElementById("row1-col2");
let r1c3 = document.getElementById("row1-col3");
let r1c4 = document.getElementById("row1-col4");

let r2c1 = document.getElementById("row2-col1");
let r2c2 = document.getElementById("row2-col2");
let r2c3 = document.getElementById("row2-col3");
let r2c4 = document.getElementById("row2-col4");

let r3c1 = document.getElementById("row3-col1");
let r3c2 = document.getElementById("row3-col2");
let r3c3 = document.getElementById("row3-col3");
let r3c4 = document.getElementById("row3-col4");

let r4c1 = document.getElementById("row4-col1");
let r4c2 = document.getElementById("row4-col2");
let r4c3 = document.getElementById("row4-col3");
let r4c4 = document.getElementById("row4-col4");

let matrix = [
    [r1c1, r1c2, r1c3, r1c4],
    [r2c1, r2c2, r2c3, r2c4],
    [r3c1, r3c2, r3c3, r3c4],
    [r4c1, r4c2, r4c3, r4c4]
];

const singleClick = () => {
    buttons.style.backgroundColor = 'red';
};

const doubleClick = () => {
    buttons.style.backgroundColor= 'blue';
}

document.querySelector(".buttons").addEventListener("click", singleClick);

document.querySelector(".buttons").addEventListener("dblClick", doubleClick);