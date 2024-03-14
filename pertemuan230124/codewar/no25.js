function sortIt(arr){
    let numberOf = {};
    arr.forEach(x => numberOf[x] = (numberOf[x]||0) + 1);
    return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
  }