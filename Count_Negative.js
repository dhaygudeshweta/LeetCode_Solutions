

const arr=[-1,1,0];

function countNegatives(arr) {
let count = 0;
  //let a = arr;
  for (let i = 0; i < arr.length; i++) {
    
    if (arr[i] < 0) {
      count++;
      
    }
  }
return count;

  // implement your solution here
}
console.log(countNegatives(arr));
module.exports = { countNegatives };