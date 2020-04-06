const BRANCH_ANGLE = Math.PI / 6;
const LENGTH_FACTOR = 0.7;

function Branch(begin, end) {
    this.begin = begin;
    this.end = end;

    this.show = () => {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branch = () => {
        // create right branch
        let directionVector = p5.Vector.sub(this.end, this.begin);
        directionVector.rotate(BRANCH_ANGLE);
        directionVector.mult(LENGTH_FACTOR);
        let rightEnd = p5.Vector.add(this.end, directionVector);
        let right = new Branch(this.end, rightEnd);

        // create left branch
        directionVector = p5.Vector.sub(this.end, this.begin);
        directionVector.rotate(-1 * BRANCH_ANGLE);
        directionVector.mult(LENGTH_FACTOR);
        let leftEnd = p5.Vector.add(this.end, directionVector);
        let left = new Branch(this.end, leftEnd);
        
        return [right, left];
    }
}