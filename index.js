const Person = require("./person.js");

const users = [
    new Person("Ahmad", "Fasehan"),
    new Person("Andris", "Firmansyah"),
    new Person("Akhirudin", "Sudiyat"),
    new Person("Bani", "Arham"),
    new Person("Rido", "Raudho")
];

for (const user of users) {
    console.log(user.getFullName());
}
// users.forEach(user => console.log(user.getFullName()));
