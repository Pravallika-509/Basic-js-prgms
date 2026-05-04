/*using string
var str="Hello World";
var reversed="";    
for(var i=str.length-1;i>=0;i--){
    reversed+=str[i];
}      
console.log(reversed);*/

//using math.floor() method
var n=12345;
var reversed="";    
for(var i=n;i>0;i=Math.floor(i/10)){
    reversed+=i%10;
}
console.log(reversed);