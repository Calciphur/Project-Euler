var listFibNums = function () {
	var fibNums = [1, 2];
  var currentNum = 0;
  
  do {
  	currentNum = fibNums[fibNums.length-1] + fibNums[fibNums.length-2];
  
  	if (currentNum <= 4000000) {
  		fibNums.push(currentNum);
  	}
	}
  while (currentNum <= 4000000)
  
  return fibNums;
}

var addEvenFibNums = function () {
	var fibNums = listFibNums();
  var runningTotal = 0;
  
  for (var i = 0; i < fibNums.length; i++) {
  	if (fibNums[i] % 2 === 0) {
    	runningTotal += fibNums[i];
    }
  }
  return runningTotal;
}

console.log(addEvenFibNums());