const express = require( "express" );
const bodyParser = require( "body-parser" );
const { randomBytes } = require( "crypto" );
const cors = require( "cors" );
const axios = require( 'axios' );

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

const posts = {}; //saved in posts object

app.get( "/posts", ( req, res ) =>
{
  console.log( posts );
  res.send( posts );

} );

app.post( "/posts", async ( req, res ) =>
{
  const id = randomBytes( 4 ).toString( "hex" );

  const { title } = req.body;

  posts[ id ] = {
    id, title
  };

  console.log( 'post event' );
  await axios.post( 'http://localhost:4005/events', {
    type: 'PostCreated',
    data: {
      id, title
    }

  } );

  console.log( posts[ id ] );
  res.status( 201 ).send( posts[ id ] );
} );

app.post('/events')


app.listen( 4000, () =>
{
  console.log( "Listening on 4000" );
} );