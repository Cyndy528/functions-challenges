// # Functions Challenges

// Evening challenges for the functions module.

// ### Maxormin(num1, num2, max)

// Define a function ```maxOrMin``` that takes three parameters: two numbers and a boolean.  Have it return the larger of the two numbers if the boolean is true, otherwise have it return the lesser of the numbers.

function Maxormin(num1, num2, bul){
	if (bul == true){
		if (num1 > num2){
			return num1;
		} else {
			return num2; 
		} else {		
	if (num1 < num2){
			return num1;
		} else {
			return num2; 
		}
	}

}; 

// <!-- Also can use Math.min and Math.max --> 
// <!-- 
// call the function --> 
// <!-- Maxormin(num1, num2, bul) -->

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ### sillySum(arr)

// Write a function that takes an array of numbers and returns the sum of each number multiplied by its index.


function sillySum(arr){
	var sum = 0; 
	for(var i = 0; i < arr.length; i ++){
		sum += arr[i] * i;
	}
}; 

return sum;

// <!-- 
// call the function -sillySum([3, 4, 5]);-> -->

// ```count += (number * index)```



// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// ### numSquare(max)

// Create a function called numSquare that will return an array of all perfect square numbers up to, but not exceeding a max number.

function numSquare(max)
	var arr =[]
	for(var i = 0; i <= max; i ++){
		if(Math.pow(i,2) < = max){
			arr.push(Math.pow(i, 2));
		}else {
			break;
	}

	}	return arr;
}

return multiply;

// <!-- call the function numSquare(100) -->
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ### isPrime(num)

// Create a function that returns true if the number passed in is a prime number and false if not.

function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ### primes(max)

// Using your isPrime function, create a function primes that will return an array of all prime numbers up to, but not exceeding a max number.


function isPrime(value) {
	var arr=[];
    for(var i = 2; i <= value; i++) {
        if(isPrime(i)) {
            array.push(i);
        }
    }
    return arr;
}