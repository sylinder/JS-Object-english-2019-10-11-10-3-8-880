# 1
var user = {};
user.name = "John";
user.surname = "Mike";
console.log("user.name: " + user.name + "; user.surname: " + user.surname);

user.name = "Peter";
console.log("user.name: " + user.name);

delete user.name;
console.log(user.name);


# 2
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10,
};

var total = 0;
for (var f in fruit) {
    total += fruit[f];
}
console.log(total);
