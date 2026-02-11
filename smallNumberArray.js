
const arr=[3,2,1];
function findSmallest(arr) {
  let small=arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    
    if(arr[i]<small)
    {
      small=arr[i];
    }

  }
  return small;
  // your solution here
}
console.log(findSmallest(arr));



//module.exports = { findSmallest };