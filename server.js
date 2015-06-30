var express = require('express'),
	exphbs = require('express3-handlebars'),
	app = express();

	var bodyParser = require('body-parser');

app.engine('handlebars', exphbs({defaultLayout: "main"}));

app.set('view engine', 'handlebars');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



app.get('/', function(req,res){

	res.render('index');

});
app.get('/index', function(req,res){

	res.render('index');

});

app.get('/about', function(req,res){
	res.render('about')
});

app.post('/', function(req,res){

	var balance = req.body.balance;
	var desNumRides = req.body.desNumRides;
	var numRides= Math.floor(balance/(2.75));
	if((desNumRides*2.75)-balance > 5.50){
	var RidesBal=Math.round(((desNumRides*2.75-balance)/1.11) * 100) / 100;
	}
	else{
		var RidesBal=Math.round(((desNumRides*2.75-balance) * 100) / 100);
		}

res.render('balance', {
		balance:balance,
		rides: numRides,
		RidesBal: RidesBal,
		desNumRides:desNumRides
	});

});

app.use('/public', express.static('public'));

var port = Number(process.env.PORT||3000);

app.listen(port);
