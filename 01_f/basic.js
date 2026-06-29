function add(num1,num2){
    console.log(num1+num2);
    
}
add(5,25)
//rest operator 
function rest(...num1){
    return num1
}
console.log(rest(200,300,400,256,859));
 const user = {
    username: "anchal",
    age: 18
 }
 function handleuser(anyobject){
    console.log(`my name is ${anyobject.username} and I am ${anyobject.age} years old`);
    
 }
 handleuser(user)
