module.exports = function getZerosCount(number, base) {
  let factors = [];
  let factor = [0,0]; // position [0] contains prime factor, [1] contains its power
  let composite = base;

  for(let i = 2; i <= composite;){
    if(!(composite%i)){
      while(!(composite%i)){
        factor[0] = i;
        factor[1]++;
        composite = parseInt(composite/i);
      }
    factors.push(factor);
    }
    else {
      i++;
      factor=[0,0]
    }
  }

  count = (number,factor) => {
    if(number < 1) return 0;
    number = parseInt(number / factor);
    return number += count(number,factor);
  }

  const zeros = [];
  for(let i = 0; i < factors.length; i++){
    zeros[i] = parseInt(count(number,factors[i][0]) / factors[i][1]);
  }
 
  return Math.min(...zeros);
}