
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));
app.use(express.static('public'));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/whoami", function (req, res) {
  const response = {
    "ipaddress": req.ip,
    "language": req.headers['accept-language'],
    "software": req.headers['user-agent'],
  };
  res.json(response);
});

// listen for requests
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
