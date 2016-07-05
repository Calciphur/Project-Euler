var multipleOfNum = function(number, divisor) {
	if (number % divisor === 0) {
  	return true;
  }
  else {
  return false;
  }
};

var storeMultiples = function(number) {
	var multiples = [];
	for (var i = 1; i < number; i++) {
  	if (multipleOfNum(i, 3) && multipleOfNum(i, 5)) {
    	multiples.push(i);
    }
  }
  return multiples;
}

var addMultiples = function() {
	var num = prompt("Enter a number");
  var multiples = storeMultiples(num);
  var sumCount = 0;
	for (var i = 0;i < multiples.length; i++) {
  	sumCount += multiples[i];
  }
  return sumCount;
}

console.log(addMultiples());