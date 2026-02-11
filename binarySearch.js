/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const nums=[-1,0,3,5,9,12];
 const target=9;
var search = function(nums, target) {

    let r=nums.length-1;
    let l=0;
    while(l<=r)
    {
       let  mid=Math.floor((l+r)/2);
       if(target==nums[mid])
       {
        return mid;
       }else if(target<nums[mid])
       {
        r=mid-1;

       }else
       {
        l=mid+1;
       }
    }
    return -1;
    
};
console.log(search(nums,target));