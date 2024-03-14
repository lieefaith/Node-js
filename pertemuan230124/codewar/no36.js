function rndCode(){
    var randomRange = function (range, count) {
      var sequence = [];
      for (var i=0; i<count; i++) {
        sequence.push(range[~~(range.length*Math.random())]);
      }
      
      return sequence.join("");
    }
    
    return randomRange('ABCDEFGHIJKLM', 2) + randomRange('0123456789', 4) + randomRange('~!@#$%^&*', 2);
  }