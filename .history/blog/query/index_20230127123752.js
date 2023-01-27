const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );

const app = express();

app.use( bodyParser.json() );
app.use( cors() );

const posts = {};
const handleEvent


app.get( '/posts', ( req, res ) =>
{
  res.send( posts );
} );

app.post( "/events", ( req, res ) =>
{
  const { type, data } = req.body;

 


  console.log( posts );

  res.send( {} );

} );

app.listen( 4002, async () =>
{
  console.log( "Listening on 4002" );
  try
  {
    const res = await axios.get( "http://localhost:4005/events" );

    for ( let event of res.data )
    {
      console.log( "Processing event:", event.type );

      handleEvent( event.type, event.data );
    }
  } catch ( error )
  {
    console.log( error.message );
  }
} );

// app.listen( 4002, () =>
// {
//   console.log( "Listening to port 4002" );
// } );