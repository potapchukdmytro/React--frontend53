export function pow(num, power) {
    let res = 1;

    for(let i = 0; i < power; i++) {
        res *= num;
    }

    return res;
}

export function factorial(num) {
    let res = 1;

    for(let i = 1; i <= num; i++) {
        res *= i
    }

    return res;
}

function pi() {
    return 3.14;
}

export default pi;