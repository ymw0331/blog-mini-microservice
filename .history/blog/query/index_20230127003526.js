const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );

const app = express();

app.use( bodyParser.json() );
app.use( cors() );

const posts = {};



app.get( '/posts', ( req, res ) =>
{

} );

app.post( "/events", ( req, res ) =>
{
  const { type, data } = req.body;

  if(type === 'PostCreated'){
    
  }

} );

app.listen( 4002, () =>
{
  console.log( "Listening to port 4002" );
} );