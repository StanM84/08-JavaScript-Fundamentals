function solve(text, n) {

    let newText = '';

    for (let i = 1; i <= n; i++){
        newText = text.repeat(i);
    }
    console.log(newText);
}
solve("String", 2)