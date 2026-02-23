let arr=[1,2,3,4];
let sum=0;

function sumArray(arr){
    for(let i=0;i<arr.length;i++)
    {
        sum +=arr[i];
       // sum++;
    }
    sum++;
    return sum;
}
console.log(sumArray(arr));