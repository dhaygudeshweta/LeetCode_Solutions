let nums=[15,5,24,8,1,3];

var mergSort=function(arr,lb,ub){
     if(lb<ub)
   {
    const mid=Math.floor((lb+ub)/2);
   
   mergSort(arr,lb,mid);
   mergSort(arr,mid+1,ub);
   sort(arr,lb,mid,ub);
}
}
   var sort=function(arr,lb,mid,ub){
   let  i=lb;
   let j=mid+1;
    let temp=[];

    while(i<=mid && j<=ub){
        if(arr[i]<=arr[j])
        {
           temp.push(arr[i]);
            i++;
            
        }
        else{
            temp.push(arr[j]);
            j++;
            
        }
        while(i<=mid)
        {
            temp.push(arr[i]);
            i++;

        }
        while(j<=ub)
        {
            temp.push(arr[j]);
            j++;
        }
        for(let k=lb;k<=ub;k++)
        {
            arr[k]=temp[k-lb];
        }
    }
}

console.log("befor",nums);
mergSort(nums,0,nums.length-1);
console.log(nums);
         