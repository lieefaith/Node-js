function saleHotdogs(n){
    var money = 0;
    if (n < 5 ) {
      money = n * 100
    }
    else if ( n >= 5 && n < 10 ) {
      money = n * 95
    }
    else if ( n >= 10 )  {
     money = n * 90 
    }
    return money
  }