
for ( let i =1;i<=100; i++){
    let flag =0;
    for( let j=2 ;j<i; j++){
        if( i % j == 0 ){
            flag =1;
            break;
        }
        
    }
     if (i > 1 && flag == 0) {
        console.log(" The prime no between 1 to 100 is " + i);
    }
}