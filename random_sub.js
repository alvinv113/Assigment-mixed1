function avg() {
    let hindi = parseInt(Math.random() * 100);
    let english = parseInt(Math.random() * 100);
    let sanskrit = parseInt(Math.random() * 100);
    let maths = parseInt(Math.random() * 100);
    let science = parseInt(Math.random() * 100);
    total = hindi + english + sanskrit + maths + science;
    console.log(" Total: " + total);
    let avg = total / 5;
    console.log("average :" + avg);
    let percentage = (total / 500) * 100;
    if (percentage >35) {
        console.log(" RESULT : PASS");

    }
    else {
        console.log(" RESULT : Fail");
    }

}

avg();
