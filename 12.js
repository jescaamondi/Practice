function findLargest(numbers){
    if(numbers.length ===0){
        return null;
    }
    let max=numbers[0];
    for(let i=0; i<numbers.length;i++){
        if(numbers[i]>max){
         max=numbers[i];
        }
    }
return max;


}
console.log(findLargest([1,5,9,25,39,20,44,50]));

function findSmallest(number){
    if(number.length===0){
    return null;
}

let small=number[0];
for(i=0;i<number.length;i++){
if (number[i]< small){
  small=number[i];
}
}
return small;
}
console.log(findSmallest([1,5,9,25,39,20,44,50]));