function countVowels(text){
    let vowel=["a","e","i","o","u"];
    let count=0;

    for(i=0;i<text.length-1;i++){
        if(text.includes(vowel[i])){
       count++;
       
    }
}
 return count;
}
console.log(countVowels("javascript"));
    