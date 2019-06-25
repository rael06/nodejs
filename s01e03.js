let Pokedex = require("pokedex-promise-v2");
let P = new Pokedex();

let promise = P.getPokemonByName(1, function(response, error) {
	if (error) {
		console.log(error);
	} else {
		console.log(response);
	}
});

promise.then(P.getPokemonsList.bind(null, 
	{
		limit: 10,
		offset: 0
	},
	response => console.log(response)
));

