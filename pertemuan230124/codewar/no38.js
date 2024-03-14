function findSimilarity(str,word){
  var reg=new RegExp("^"+word.replace(/\B.\B/g,".")+"$");  // \B match non character boundary
  return str.split(/ /).filter(x=>reg.test(x)).join(" ");
}