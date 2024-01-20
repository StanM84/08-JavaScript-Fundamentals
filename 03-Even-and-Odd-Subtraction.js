function solve(input) {

    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < input.length; i++) {

        let curNum = Number(input[i]);

        if (curNum %2 == 0) {

            evenSum += curNum;
        }
        else {

            oddSum += curNum;
        }
    }
    console.log(evenSum - oddSum);
}
solve([3,5,7,9])