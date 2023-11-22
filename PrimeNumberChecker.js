function primeNumberChecker(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            console.log(num + ' is not a prime number');
            return num + ' is not a prime number';
            break;
        } else if (num % i > 0 && i == (num - 1)) {
            console.log(num + ' is a prime number');
            return num + ' is a prime number';
            break;
        } else {
            continue
        }
    }
}

primeNumberChecker(82)