let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

function doubleArr(arr) {
  return arr.map((el => el*2));
}

console.log(doubleArr(data));

function sortPrimes(arr) {
  return arr.filter(isPrime).sort((a,b) => a - b);
}

console.log(sortPrimes(data));

function convertArr(arr) {
  let convertedArr = [];
  for (let i = 0; i < arr.length; i++) {
      newElement = {
      number: arr[i],
      isPrime: isPrime(arr[i])
    };
    convertedArr.push(newElement);
  }
  return convertedArr;
}

console.log(convertArr(data));

console.log(convertArr(sortPrimes(data)));

function getHighest(arr) {
  return arr[arr.length-1];
}

console.log(getHighest(convertArr(sortPrimes(data))));

console.log(getHighest(convertArr(sortPrimes(data))).number);

