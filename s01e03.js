let Pokedex = require("pokedex-promise-v2");
let P = new Pokedex();

P.getPokemonByName(1, function(response, error) {
	if (error) {
		console.log(error);
	} else {
		console.log(response);
	}
}).then(P.getPokemonsList.bind(null, 
	{
		limit: 10,
		offset: 0
	},
	response => console.log(response)
));

/* P.getPokemonByName(1, function(response, error) {
	if (error) {
		console.log(error);
	} else {
		console.log(response);
	}
}).then(function () {
	P.getPokemonsList( {
		limit: 10,
		offset: 0
	}, response => console.log(response))
}); */