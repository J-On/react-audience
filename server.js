
// Requires and variables
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var axios = require('axios');
var PORT = process.env.PORT || 3333;
var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyA3vPHLE8uUuHKQrJCr9kVYdeynEnZgFsI",
  authDomain: "react-audience.firebaseapp.com",
  databaseURL: "https://react-audience.firebaseio.com",
  projectId: "react-audience",
  storageBucket: "",
  messagingSenderId: "661390622326"
};

var userCount = null

//Initialize Firebase for DB updates and bodyParser for express routing
firebase.initializeApp(config);
app.use(bodyParser.json());

//Making pages and static files available

app.use(express.static(__dirname + '/client/public'));



app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/public/index.html');
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Express Response Test 2' });
});

//Temp non-react admin page
app.use(express.static(__dirname + '/public'));
app.get('/admin', function(req, res){
  res.sendFile(__dirname + '/public/admin.html');
});


//Open web socket with users and updates user count
io.on('connection', function(socket){
  userCount +=1;
  console.log('a user connected. user count: ' + userCount);
  console.log('new user: %s', socket.id);
  socket.on("disconnect", function() {
    userCount -=1;
    console.log('a user disconnected. user count: ' + userCount);
  });
});

//Receives post data from admin panel
app.post('/question', function(req, res){
  const newQuestion = req.body;

  //Creates a new child node in Firebase with a dummy entry
  firebase.database().ref(newQuestion.dbLocation).set({
      " ": "0",
  })

  //Emits the new question data to users
  io.emit('newQuestion', newQuestion);
  res.sendStatus(201);
});

//Receives post data from admin panel
app.post('/refresh', function(req, res){
  const refreshData = req.body;
  io.emit('refreshData', refreshData);
  res.sendStatus(201);
});

//NEW REACT-AUDIENCE HTTP REQUEST/RESPONSES

app.post('/submit', function(req, res) {
  const questionData = req.body;
  console.log('request data: ', questionData)
  res.sendStatus(201);
})

//Gets server listening for connections on the port
http.listen(PORT, function(){
    console.log('Server is listening on: ' + PORT);
});
