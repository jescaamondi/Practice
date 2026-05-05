function reverseString(text){
    let reverse="";
    for(i=text.length-1;i>=0;i--){
        reverse+=text[i];
}
return reverse;
}
console.log(reverseString("hello"));