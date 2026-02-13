* @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    function mergeSort(arr,lb,ub)
    {
        if(lb>=ub) return;
        
         let   mid=Math.floor((lb+ub)/2);

            mergeSort(arr,lb,mid);
            mergeSort(arr,mid+1,ub);
            sort(arr,lb,mid,ub);
        
    function sort(arr,lb,mid,ub)
    {
        let i=lb;
        let j=mid+1;
         let temp=[];


        while(i<=mid && j<=ub)
        {
            if(arr[i]<=arr[j])
            {
                temp.push(arr[i]);
                i++;
            }
            else
            {
        temp.push(arr[j]);
        j++;
            }
        }
        while(i<=mid)
        {
            temp.push(arr[i]);
            i++;
        }
        while(j<=mid)
        {
            temp.push(arr[j]);
            j++;
        }
        for (let k=lb;k<=ub;k++)
        {
            arr[k]=temp[k-lb];
        }
    }
    }

    mergeSort(nums,0,nums.length-1);
    return nums;
    
};