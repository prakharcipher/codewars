function isPrime(num) {
  var c = 0;
  for(var i = 2; i <= num/2; i++) {
    if(num % i ==0) {
      c=1;
      break;
    }
  }
  if(c==0) return true;
  else return false;
}


function getAllPrimeFactors(n) { 
  if(n==1)
  return [1];
  else {
  var out = [];
  var num = 2;
  while(num <= n) {
    if(n % num == 0 && isPrime(num)) {
      out.push(num);
      n = n/num;
    } else num++;
  }
  return out;
  }
}

function getUniquePrimeFactorsWithCount(n) { 
  if(n==1)
  return [[1], [1]];
  else {
  var res = [];
  var out = [];
  var outCount = [];
  var num = 2;
  var c = 0;
  while(num <= n) {
    if(n % num == 0 && isPrime(num)) {
      c++;
      if(!out.includes(num)) out.push(num);
      n = n/num;
    } else {
      num++;
      if(c>0)
      outCount.push(c);
      c = 0;
    }
  }
  if(c>0)
  outCount.push(c);
  res.push(out, outCount);
  return res;
  }
}

function getUniquePrimeFactorsWithProducts(n) {
  if(n==1)
  return [1];
  else {
   var res = [];
  var out = [];
  var outCount = [];
  var num = 2;
  var c = 0;
  while(num <= n) {
    if(n % num == 0 && isPrime(num)) {
      c++;
      if(!out.includes(num)) out.push(num);
      n = n/num;
    } else {
      num++;
      if(c>0)
      outCount.push(c);
      c = 0;
    }
  }
  if(c>0)
  outCount.push(c);
  //res.push(out, outCount);
  //return res;
  var newArr = [];
  for(var i = 0; i < out.length; i++) {
    var pro = Math.pow(out[i], outCount[i]);
    newArr.push(pro);
  }
  return newArr;
  }
}
