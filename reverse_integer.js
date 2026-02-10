/**
 * @param {number} x
 * @return {number}
 */
let x=123;
var reverse = function(x) {

    let rev=0;
    let num=Math.abs(x);
    
    while(num!==0)
    {
        rev=rev*10+num%10;
        num=Math.floor(num/10);
    }
     rev=x<0?-rev:rev;
    if(rev<-2147483648||rev>2147483647)
    {
        return 0;
    }
   

    return rev;
    
};
console.log(reverse(x));