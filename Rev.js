let str="shweta";
function Rev(str)
{
    let l=0;
    let r=str.length-1;

   let arr=str.split("");
   while(l<r)
   {
    let temp=arr[l];
    arr[l]=arr[r];
    arr[r]=temp;
    l++;
    r--;


   }
   return arr.join("");
}
   console.log(Rev(str));
