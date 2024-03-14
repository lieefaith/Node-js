var shuffleIt=(arr,...ex)=>{
    for ([a,b] of ex) [arr[a],arr[b]]=[arr[b],arr[a]];
    return arr;
  }