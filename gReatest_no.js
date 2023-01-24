function greatest(x, y, z) {

    if (x > y && x > z) {
        console.log("X = " + x + " is the greatest");
    }
    else if (z > x && z > y) {
        console.log("Z = " + z + " is the greatest");
    }
    else {
        console.log("Y = " + y + " is the greatest");
    }
}

greatest(2, 5, 3);