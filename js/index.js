"use strict";

const LENGTH = window.innerHeight / 4;
const MIN_LENGTH = LENGTH / 30;
const BRANCHING_ANGLE = Math.PI / 6;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
    background(51);
    stroke(255);

    // translate the origin from (0, 0) to (mid, max-window-height)
    let mid = window.innerWidth / 2;
    let something = translate(mid, height);
    branch(LENGTH);
}

function branch(length) {
    line(0, 0, 0, -1 * length);
    translate(0, -1 * length);
    if (length > MIN_LENGTH) {
        // rotate to the right
        push();
        rotate(BRANCHING_ANGLE);
        branch(length * 0.7);
        pop();

        // rotate to the left
        push();
        rotate(-1 * BRANCHING_ANGLE);
        branch(length * 0.7);
        pop();
    }
}