function checkPrime(num){
    if(num<=1){
        return false;
    }
    for(var i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
var num=17;
if(checkPrime(num)){
    console.log(num+" is a prime number");
}
else{
    console.log(num+" is not a prime number");
}
