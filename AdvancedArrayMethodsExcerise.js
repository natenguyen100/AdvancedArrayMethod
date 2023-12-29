// const doubleValues = [1, 2, 3];
// doubleValues.forEach(function (num) {
//     console.log(num * 2);
// });

// const doubleValues = [5, 1, 2, 3, 10];
// doubleValues.forEach(function (num) {
//     console.log(num * 2);
// });

function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function (num) {
        newArr.push(num * 2);
    });
    return newArr;
}

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function (num) {
        if (num % 2 === 0) {
            newArr.push(num);
        }
    });
    return newArr;
}

function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function (str) {
        newArr.push(str[0] + str[str.length - 1]);
    });
    return newArr;
}

function addKeyAndValue(arr, key, value) {
    arr.forEach(function (obj) {
        obj[key] = value;
    });
    return arr;
}

function vowelCount(str) {
    let splitArr = str.toLowerCase().split("");
    let obj = {};
    const vowels = "aeiou";

    splitArr.forEach(function (letter) {
        if (vowels.indexOf(letter) !== -1) {
            if (obj[letter]) {
                obj[letter]++;
            } else {
                obj[letter] = 1;
            }
        }
    });
    return obj;
}

function doubleValuesWithMapp(arr){
    return arr.map(function (num) {
        return num * 2;
    });
}

function valTimesIndex(arr) {
    return arr.map(function (num, idx) {
        return num * idx;
    });
}

function extractKey(arr, key) {
    return arr.map(function (obj) {
        return obj[key];
    });
}

function extractFullName(arr) {
    return arr.map(function (obj) {
        return obj.first + " " + obj.last;
    });
}

function filterByValue(arr, key) {
    return arr.filter(function (obj) {
        return obj[key] !== undefined;
    });
}

function find(arr, searchValue) {
    return arr.filter(function (val) {
        return val === searchValue;
    })[0];
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }

  function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }

  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }