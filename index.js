const Person = require("./person.js");

const users = [
    new Person("Ahmad", "Fasehan"),
    new Person("Andris", "Firmansyah"),
    new Person("Akhirudin", "Sudiyat"),
    new Person("Bani", "Arham"),
    new Person("Rido", "Raudho"),
    new Person("John", "Doe")
];

const names = users.map((item, index) => {
    return `(${index}) => ${item.getFullName()}`;
});

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// users.forEach(user => console.log(user.getFullName()));
