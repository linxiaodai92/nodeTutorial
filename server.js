var express = require('express');
var app = express();
var request = require('request');
app.set('port', (process.env.PORT || 5000));
app.use(express.static('./public'));

app.get('/', function(req, res) {
	res.sendfile('./public/index.html');
});
app.get('/storytime', function(reg,res){
res.send("<p>"+ req.query.name+ "nice to meet you! " + req.query.verb+ "this has been an awesome story of "+ req.query.adjective+
", you are totally welcome</p");	
});
app.listen(app.get('port'), function() {
	console.log('Fuck it ship it.');
});
