function createUser(username,score){
    this.username = username    
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.print = function(){
    console.log(`The price is ${this.score}`)
}
const chai = new createUser("Chai",25)
chai.print()