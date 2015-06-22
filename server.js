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

app.get('/about', function(req,res){
	res.render('about')
});

app.post('/', function(req,res){
	
	var balance = req.body.balance;
	var numRides= Math.floor(balance/(2.75));
	var tenRidesBal=Math.round(((27.5-balance)/1.1) * 100) / 100;
	res.render('balance', {
		balance:balance,
		rides: numRides,
		tenRidesBal: tenRidesBal
	});
	
});

app.use('/public', express.static('public'));   

var port = Number(process.env.PORT||3000);  

app.listen(port);