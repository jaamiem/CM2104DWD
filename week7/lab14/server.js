var express = require('express');
var twitter = require('twitter');
var path = require('path');

var app = express();
var params = {screen_name: 'nodejs'};

var client = new twitter({
	consumer_key: "dXn0vgFQ9XpFQrU52tJiqLhBV",
	consumer_secret: "MVEYApN7Lmt4vSSy2I39nch8i1Gpkk6EoGiPTSDYCXHTe9qjxD",
	access_token_key: "973276739345567744-CcyNZ50hh63gIs037Uk77vAwUPnbX99",
	access_token_secret: "BPaHLObw1l2nUrBapHvSUKeENDafRdsvtI3f0k5jsjhJF"
});

app.use(express.static(path.join(__dirname, 'public')));

var output = '';

client.get('statuses/user_timeline', params, function(error, tweets, response){
	if (!error) {
		for( var t = 0; t < tweets.length; t++ ){
			var newtweet = {
				username: tweetsArr[tweets[t].user.screen_name,
				twit: tweets[t].text,
			}
			output += tweet;
		}
	}
});

app.get('/', (req, res) => {
	res.send(output);
});

app.get('/getter', (req,res) => {
	var uname = req.query.username;
	var term = req.query.term;

	res.render();
});

app.listen(8080);
