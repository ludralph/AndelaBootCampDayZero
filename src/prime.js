'use strict';

var exports=module.exports={};
exports.getPrime= function (number)
{
    var primes = [];
    var primesArr = [];
    for(var i = 2; i < number+1; i++) {
        primes[i] = true;
    }
    var value = Math.sqrt(number);
    for(var i = 2; i < value; i++) {
        if(primes[i] === true) {
            for(var j = i * i; j <= number; j += i) {
                primes[j] = false;
            }
        }
    }
    for(var i = 2; i <= number; i++) {
        if(primes[i] === true) {
            primesArr.push(i);

        }
    }

    return primesArr;
}
