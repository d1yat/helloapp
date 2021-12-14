const Person = require("./person.js");

const users = [
    new Person("Ahmad", "Fasehan"),
    new Person("Andris", "Firmansyah"),
    new Person("Akhirudin", "Sudiyat"),
    new Person("Bani", "Arham"),
    new Person("Rido", "Raudho")
];

users.forEach(user => console.log(user.getFullName()));
