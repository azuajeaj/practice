var express = require('express'),
	exphbs = require('express3-handlebars'),
	app = express();

app.engine('handlebars', exphbs({defaultLayout: "main"}));

app.set('view engine', 'handlebars');

app.get('/', function(req,res){

	res.render("index");
});

app.use('/public', express.static('public'));   

var port = Number(process.env.PORT||3000);

app.listen(port);