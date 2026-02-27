
var findMedianSortedArrays = function(nums1, nums2) {

    let num3=[];
    let i=0;
    let j=0;
    while(i<nums1.length &&j<nums2.length){
        if(nums1[i]<nums2[j])
        {
            num3.push(nums1[i]);
            i++;
        }
        else
        {
            num3.push(nums2[j]);
            j++;
        }
    }
    let n=num3.length;
    if(n%2===0)
    {
        return (num3[n/2-1]+num3[n/2])/2;
    }else
    {
        return num3[Math.floor(n/2)];
    }
    
    
};