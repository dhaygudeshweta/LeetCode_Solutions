

let nums=[1,2,3,4,4,3];
let val=3;
var removeElement = function(nums, val) {
    let k=0;
    
    for(let i=0;i<nums.length;i++)
    {
        if(nums[i]!==val)
        {
           nums[k]=nums[i];
           k++;
        }
    }
    return k;
    
};
console.log(removeElement(nums,val));
console.log(removeElement(nums));