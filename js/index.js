"use strict";

const WIDTH = window.innerWidth * 0.85;
const HEIGHT = window.innerHeight;
const LENGTH = HEIGHT / 4;

let LEVELS = 10;
let BRANCH_ANGLE = Math.PI * 0.1;
let LENGTH_FACTOR = 0.7;

let byLevel = [];

// event listeners
document.querySelector("#levelsListener").addEventListener("change", evt => {
    LEVELS = parseInt(evt.target.value);
    document.querySelector("#currentLevels").textContent = `Levels: ${LEVELS}`;
    byLevel = nodesAtLevels();
});

document.querySelector("#angleListener").addEventListener("change", evt => {
    BRANCH_ANGLE = Math.PI * parseFloat(evt.target.value);
    document.querySelector("#currentBranchingAngle").textContent = `Angle: π * ${evt.target.value}`;
    byLevel = nodesAtLevels();
});

document.querySelector("#lengthFactorListener").addEventListener("change", evt => {
    LENGTH_FACTOR = parseFloat(evt.target.value);
    document.querySelector("#currentLengthFactor").textContent = `Factor: ${LENGTH_FACTOR}`;
    byLevel = nodesAtLevels();
});


// setup canvas for P5.js
function setup() {
    createCanvas(WIDTH, HEIGHT);
    byLevel = nodesAtLevels();
}

// generate branches at each level
function nodesAtLevels() {
    let x = createVector(WIDTH / 2, HEIGHT);
    let y = createVector(WIDTH / 2, HEIGHT - LENGTH);
    let root = new Branch(x, y, BRANCH_ANGLE, LENGTH_FACTOR);

    let byLevel = [];
    byLevel.push([root]);

    for (let i = 1; i < LEVELS; i++) {
        let prev = byLevel[i - 1];
        let curr = [];
        prev.forEach(b => {
            let t = b.branch();
            curr = curr.concat(t);
        })
        byLevel.push(curr);
    }
    return byLevel;
}

function draw() {
    background(51);
    byLevel.forEach(level => {
        level.forEach(n => {
            n.show()
        })
    });
}