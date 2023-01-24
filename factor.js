function factor(num){
// const num = Number(prompt(" Enter a number :"));
let count =0;
for(let  i = 1; i <= num; i++) {

    // check if number is a factor
    if(num % i == 0) {
        // console.log(" The factr of no.s are:"+i);
        count++;
    }}
    console.log(` The count of the factor of a num is: `+ count);
}

factor(8);