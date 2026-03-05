const arr=[3,2,1];
function findLargest(arr) {
  let largestNum=arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    
    if(arr[i]>largestNum)
    {
      largestNum=arr[i];
    }

  }
  return largestNum;
  // your solution here
}
console.log(findLargest(arr));