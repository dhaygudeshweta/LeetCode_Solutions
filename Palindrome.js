/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   let rev=0;
   let num=x;

    if(x<0)
    {
        return false;
    }
    while(num!=0)
    {
        rev=rev*10+num%10;
        num=Math.floor(num/10);
    }
    return(rev==x);
   
};
