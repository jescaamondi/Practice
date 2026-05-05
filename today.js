 
function findMax(numbers) {

    if (numbers.length === 0) {
        return null; 
    }
    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

console.log(findMax([63, 15, 117, 230, 205, 18]));  
console.log(findMax([7, 73, 21, 30, 300]));   
console.log(findMax([]));                     