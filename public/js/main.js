"use strict";

let pokemonLinks = document.querySelectorAll(".pokemonLink");

pokemonLinks.forEach(element => element.addEventListener("click", save));

function save(event) {
	
	let pokemonName = event.target.id;

	axios.post("/savePokemon", { pokemonName: pokemonName }).then(function (response) {
		console.log(response.data);
		console.log("envoyé");
	});
	
}