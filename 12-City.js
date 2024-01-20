function solve(obj) {

    for (let key in obj) {
        console.log(key + " -> " + obj[key]);
    }
}
    
solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
}
)