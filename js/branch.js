function Branch(begin, end, branchAngle, lengthFactor) {
    this.begin = begin;
    this.end = end;

    this.show = () => {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branch = () => {
        // create right branch
        let directionVector = p5.Vector.sub(this.end, this.begin);
        directionVector.rotate(branchAngle);
        directionVector.mult(lengthFactor);
        let rightEnd = p5.Vector.add(this.end, directionVector);
        let right = new Branch(this.end, rightEnd, branchAngle, lengthFactor);

        // create left branch
        directionVector = p5.Vector.sub(this.end, this.begin);
        directionVector.rotate(-1 * branchAngle);
        directionVector.mult(lengthFactor);
        let leftEnd = p5.Vector.add(this.end, directionVector);
        let left = new Branch(this.end, leftEnd, branchAngle, lengthFactor);
        
        return [right, left];
    }
}