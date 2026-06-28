const tinderuser = {}
tinderuser.id = 1234
tinderuser.name = "Anchal"
tinderuser.loggedIn = true
console.log(tinderuser);
const regularuser = {
    email : "anchal@google.com",
    name : {
        first:"anchal",
        last:"garg"
    },
    phone: "123654"


}
console.log(regularuser.name.first,);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));



