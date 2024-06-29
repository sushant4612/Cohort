interface User {
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User) {
    return user1.age + user2.age;
}

console.log(sumOfAge({ name: 'John', age: 20 }, { name: 'Jane', age: 25 }));
