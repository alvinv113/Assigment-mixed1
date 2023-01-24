function sumPrimes(num) {

    let sum = 0;

    const isPrime = n => {
        for (let i = 2; i < n; i++)
            if (n % i === 0) return false;
        return n !== 1;
    }

    for (i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
            console.log(i);
            console.log(isPrime(i));
        }
    }

    console.log( "the sum of 100 prime no is "+sum);
    return sum;
}

// test here
sumPrimes(100);