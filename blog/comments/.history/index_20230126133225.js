const express = require( "express" );
const bodyParser = require( "body-parser" );
const { randomBytes } = require( "crypto" );


const app = express();
app.use( bodyParser.json() );

const posts = {};

app.get( "/posts/:id/comments", ( req, res ) =>
{
  console.log( posts );
  res.send( posts );

} );

app.post( "/posts/:id/comments", ( req, res ) =>
{

} );


app.listen( 4001, () =>
{
  console.log( "Listening on 4001" );
} );