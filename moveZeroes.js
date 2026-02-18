let nums=[0,1,0,3,12];

function moveZeroes(nums){
    let i=0;
    for(let j=0;j<nums.length;j++)
    {
        if(nums[j]!==0)
        {
            let k=nums[i];
            nums[i]=nums[j];
            nums[j]=k;
            i++;
        }
    }

};

console.log(nums);