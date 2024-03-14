function maxMin(arr1,arr2){
    var rs=arr1.map((x,i)=>Math.abs(x-arr2[i]));
    return [Math.max(...rs),Math.min(...rs)];
  }