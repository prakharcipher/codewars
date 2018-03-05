function consecKprimes(k, arr) {
var count = 0;

  function isPrime(num) {
     if (num <= 1)  return false;
    if (num <= 3)  return true;
 
    if (num%2 == 0 || num%3 == 0) return false;
 
    for (var i=5; i*i<=num; i=i+6)
        if (num%i == 0 || num%(i+2) == 0)
           return false;
 
    return true;
  }
    
    function isKPrime(K, n) {
      var c = 0;
      for(var i = 2; i <= n; ) {
        if(!isPrime()) continue;
        if(isPrime() && n%i==0) {
          c++;
          n = n/i;
        } else i++;
      }
      if(c == K) return true;
      else return false;
    }
    
    for(var i = 0; i < arr.length-1; i++) {
      if(isKPrime(k, arr[i]) && isKPrime(k, arr[i+1]))
      count++;
    }
    return count;
}
