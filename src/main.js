"use strict"

/*function testVar(){
	var a =20;
	if(true){
		var a = 40;
		console.log('testVar >>> ',a);
	}
	console.log('testVar >>> ',a);
}

function testLet(){
	let a = 30;
	if(true){
		let a = 60;
		console.log('testLet >>> ',a);
	}
	console.log('testLet >>> ',a);
}

testVar();

testLet();*/

//Constants Usage.

const colors = [];
colors.push('red');
colors.push('green');
colors.push('blue');

console.log(colors);// ['red','green','blue'];

//colors = "Some Name";// Uncaught TypeError: Assignment to constant variable.

class User{

	//creating the constructor
	constructor(username,email,password){
		this.username = username;
		this.email = email;
		this.password = password;
	}

	//static method not require the reference to cal it
	static countUsers(){
		console.log('There are only 10 users');
	}

	register(){
		console.log(this.username + ' registered now');
	}

}

/*let naveen = new User('nandu','nandu@gmail.com','nandupassword');

naveen.register();*/

//Static method calling using class name
//User.countUsers(); // results There are only 10 users

//Inheritance in Javascript

class Member extends User{

	//constructor
	constructor(username,email,password,packageName){
		//Calling the super class constructor as it is inherited from User
		super(username,email,password);
		//assiging the extra parameter to this keyword
		this.package = packageName;
	}

	getPackage(){
		console.log(this.username+' registered with '+this.package+' package');
	}

	makeUppperCase(word){
		return word.toUpperCase();
	}
}

//Instantiating the child object with let
let naveen = new Member('naveen','naveen@gmail.com','1234','Special');

//Calling child method
naveen.getPackage();
//calling super class method using child class instance
naveen.register();

User.countUsers();


//Template Strings

let myName = 'Nandu';

let template = `<h2>${naveen.makeUppperCase('This is soo cool')} ${myName}
				<p>This is small paragraph</p>`;

document.getElementById('testInfo').innerHTML = template;






