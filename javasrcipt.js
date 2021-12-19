

console.log("hello world");
window.alert('Hey Rabbil')


let r ={
	Rabbil : [ 'Rabbil','Sarker', 34,'cse','Cumilla','Dhaka'],

	Shakil : [ ' Shakil','Forhad',65,'cse','Sonargaon','Dhaka'],

	Tonoy : { 
		fname: ' Tonoy',
		lname: 'Ahmed',
		id: 65,
		dept: 'cse',
		home: 'Lokkhipur',
		Capital: 'Dhaka'
		} 
	} 
r.Rabbil.push('hey');
r.Shakil.pop();

console.log(r.Rabbil);
console.log(r.Shakil);
console.log(r);

console.log("JS Fundamentals");

 let Rabbil =[ 'Rabbil','Sarker', 34,'cse','Cumilla','Dhaka'];
 Rabbil.forEach( function(b){
 	console.log(b.Rabbil[2]);
 }
 	)

 // array print use for loop

for(let i = 0; i < Rabbil.length ; i++){
	console.log(Rabbil[i]);
}


// object print use for in
for (const property in r.Tonoy) {
  console.log(`${property}: ${r.Tonoy[property]}`);
}