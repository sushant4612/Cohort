"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
console.log(sumOfAge({ name: 'John', age: 20 }, { name: 'Jane', age: 25 }));
