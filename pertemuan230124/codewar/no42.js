var regex=/\d(?=(\d{3})+$)/g
function addCommas(money,reg){
  //coding the use of regex here...
  return money.replace(reg,x=>x+",")  //like this
}