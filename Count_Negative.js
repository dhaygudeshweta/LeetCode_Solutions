

const arr=[-1,1,0,-3];

function countNegatives(arr) {
let count = 0;
  //let a = arr;
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] < 0) {
      console.log( "negative numbers are", arr[i]);
      count++;
      
    }
  }
  //console.log("negative number count ",count);
return count;
  // implement your solution here
}
console.log(countNegatives(arr));
//module.exports = { countNegatives };