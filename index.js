"use strict";

console.clear();

function myMath(operation, ...nums) {
    if (new.target) {
        throw new Error('Invalid operation');
    }

    const isMethodAlreadyExist = operation in Math;
    
    if (isMethodAlreadyExist) {
        if(typeof(Math[operation])==='number')return Math[operation];
        return Math[operation](...nums);
    }


    switch (operation) {
        case 'sum': {
            let sum = 0;

            for (let i = 0; i < nums.length; ++i) {
                sum += nums[i];
            }

            return sum;
        }
        case 'subtract': {
            let sub = 0;

            for (let i = 0; i < nums.length; ++i) {
                sub -= nums[i];
            }

            return sub;
        }
        case 'multiply': {
            let mul = 1;

            for (let i = 0; i < nums.length; ++i) {
                mul *= nums[i];
            }

            return mul;
        }
        case 'division': {
            let div = 1;

            for (let i = 0; i < nums.length; ++i) {
                div /= nums[i];
            }

            return div;
        }
    }

    throw new Error('No such operation');
    
}

const sum = myMath('sum', 1, 2, 3, 4, 5);
const pi = myMath('PI', 2, 5);
const pow = myMath('pow', 2, 5);

console.log(sum);
console.log(pi);
console.log(pow);