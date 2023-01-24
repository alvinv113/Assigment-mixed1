function netPay(basicPay, TA, DA, HRA, PF) {

    if (basicPay <= 5000) {

        netPay = basicPay + TA + DA + HRA - PF;

    } else if (basicPay > 5000 && basicPay <= 10000) {

        netPay = basicPay + TA + DA + HRA - PF;

    } else if (basicPay > 10000 && basicPay <= 15000) {

        netPay = basicPay + TA + DA + HRA - PF;

    } else if (basicPay > 15000 && basicPay <= 20000) {

        netPay = basicPay + TA + DA + HRA - PF;

    } else if (basicPay > 20000) {

        netPay = basicPay + TA + DA + HRA - PF;

    } else {

        console.log("Enter a valid amount");// remove this else as it is not needed

    }

    return netPay;

}

let netPay;

netPay(5000, 125, 170, 250, 180);

console.log("Net Payment of an Employee : " + netPay);