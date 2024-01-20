function solve(text, word) {
    const words = text.split(' ');
    let count = 0;

    for (const w of words) {
        if (w === word) {
            count++;
        }
    }

    console.log(count);
}

solve('softuni is great place for learning new programming languages','softuni')