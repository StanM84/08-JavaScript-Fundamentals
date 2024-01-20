function solve(contactsArray) {

    let contactMap = new Map();

    for (let contact of contactsArray) {
        let [name, number] = contact.split(' ');
        contactMap.set(name, number);
    }

    for (let [name, number] of contactMap) {
        console.log(`${name} -> ${number}`);
    }
}
solve(
['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
)