var isPrime = function (number) {
    for (var i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

var listPrimeFactors = function (number) {
    var primeFactors = [];
    
    for (var i = 2; i < Math.ceil(Math.sqrt(number)); i++) {
        if (number % i === 0) {
            if (isPrime(i)) {
                primeFactors.push(i);
            }
        }
    }
    return primeFactors;
}

var largestPrimeFactor = function (number) {
    var primeList = listPrimeFactors(number);
    return primeList[primeList.length-1];
}

console.log(largestPrimeFactor(600851475143));
