/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
  let  res=-1;
  let  prev_res=-1;
  let digitregex=/^\d+$/;
for(let i=0;i<s.length;i++)
{
if(digitregex.test(s[i])){
    const num=Number(s[i]);
    if(num>res){
        prev_res=res;
        res=num;
        
    }else if(num<res && num > prev_res){
        prev_res=num;
    }
}
}
return prev_res;
    
};