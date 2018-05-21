    /* A Prime number is a positive integer divisible by 1 and the number itself. function tofindPrimeNumber(x) accepts parameter and checks if the given number is prime number or not and returns true or false respectively */
	
	function tofindPrimeNumber(x) { 
    if (x == 1) {
        return false;
    }
    else if (x == 2) { //else if condition checks for whether the parameter matches the prime number 2 and returns true if it does.
        return true;
    } else {
        for (var i = 2; i < x; i++) {
			
	/* if condition checks for whether the specified parameter by the iterated number is divisible.If condition is not satified returns false otherwise exits from the for loop with the iterated number and returns true */
	
            if (x % i == 0) {  
                return false;
				
            }
        }
        return true;
    }
	}
