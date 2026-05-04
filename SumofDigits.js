var num=198753;
var sum=0;
//using while loop
while(num>0){
    sum+=num%10;
    num=Math.floor(num/10);
}
console.log(sum);