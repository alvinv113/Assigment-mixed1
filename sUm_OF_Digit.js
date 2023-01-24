function sum(){
    var n = -4, remainder, sumOfDigits = 0;
  while(n !=0)
  {
    remainder = n % 10;
    sumOfDigits = sumOfDigits + remainder;
    n = Math.floor(n/10);
  }
  console.log("The sum of digit is: " +sumOfDigits);

}

sum();