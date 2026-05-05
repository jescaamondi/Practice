function fizzBuzz(){
    for(i=0;i<30;i++){
    const isDivisibleBy3=(i+1)%3===0;
    const isDivisibleBy5=(i+1)%5===0;
    
     if(isDivisibleBy5 && isDivisibleBy3){
        console.log("fizzBuzz");
     }
     else if(isDivisibleBy3) {
      console.log("fizz");
    }
     else if(isDivisibleBy5) {
      console.log("buzz");
    }
    else {
        console.log(1+1);
    }
}
}
fizzBuzz();