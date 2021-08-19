module.exports = function reverse (n) { 
      n = Math.abs(n);
      let sum = 0;
      let x;
      while (n){
            x = n % 10;
            sum = (sum * 10) + x;
            n = n / 10|0
      }
       return sum
}
