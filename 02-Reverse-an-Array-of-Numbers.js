function reverce(n, input) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.unshift(input[i]);
    }
    console.log(arr.join(" "));
}
reverce(3, [10, 20, 30, 40, 50]);
