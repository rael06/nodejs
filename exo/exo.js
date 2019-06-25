let express = require("express");
var bodyParser = require('body-parser');
let app = express();
let favoritesPokemon = [];

app.set("view engine", "ejs");

app.use(bodyParser.json());

app.get("/", function(req, res) {
	P.getPokemonsList(
		{
			limit: 151,
			offset: 0
		},
		response => {
			res.render("home", { data: response });
		}
	);
});

app.get("/details/:id", function (req, res) {
	P.getPokemonByName(req.params.id, function (response, error) {
		if (error) {
			console.log(error);
			res.send(400, "erreur");
		} else {
			res.render("details", { data: response });
		}
	})
});

app.post("/savePokemon", function (req, res) {
	console.log("salut");
	favoritesPokemon.push(req.body.pokemonName);
	res.send(favoritesPokemon);
})

app.use(express.static("public"));

let Pokedex = require("pokedex-promise-v2");
let P = new Pokedex();

app.listen(3000, function() {
	console.log("Server ready");
});
