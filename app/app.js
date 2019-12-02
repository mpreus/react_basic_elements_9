const person = {
  	title: "Mr.",
  	name: "Tester",
  	surname: "Kowalski",
  	age: 41,
  	occupation: "Frontend developer"
};

function ListOfPeople() {
	return (
		<div>
			<h1>Personal data</h1>
			<h3>List:</h3>
			<ul>				
  				<li>Title: { person.title }</li> 
  				<li>First name: { person.name }</li>
  				<li>Last name: { person.surname }</li>
  				<li>Age: { person.age }</li>
  				<li>Occupation: { person.occupation }</li>
  			</ul>
		</div>
	)
}

ReactDOM.render( 				 
  	<ListOfPeople />,
  	document.getElementById("app")
);