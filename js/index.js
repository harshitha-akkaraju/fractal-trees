"use strict";

const LENGTH = window.innerHeight / 4;
const LEVELS = 10;
let byLevel = [];

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    byLevel = nodesAtLevels();
}

function nodesAtLevels() {
    let x = createVector(window.innerWidth / 2, window.innerHeight);
    let y = createVector(window.innerWidth / 2, window.innerHeight - LENGTH);
    let root = new Branch(x, y);

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