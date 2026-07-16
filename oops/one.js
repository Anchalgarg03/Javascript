function user(username,count,isloggedIn){
    this.username = username
    this.count = count
    this.isloggedIn = isloggedIn
    return this
}
const userOne = new user("Anchal",14,true)
const userTwo = new user("Yash",17,false)
console.log(userOne);
console.log(userTwo);

