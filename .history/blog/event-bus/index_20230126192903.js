const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const axios = require( 'axios' );


// axios.post('http://localhost:4000/events', event).catch((err) => {
//   console.log(err.message);
// });
// axios.post('http://localhost:4001/events', event).catch((err) => {
//   console.log(err.message);
// });
// axios.post('http://localhost:4002/events', event).catch((err) => {
//   console.log(err.message);
// });
// res.send({ status: 'OK' });


const app = express();
app.use( bodyParser.json() );

app.post('/events')