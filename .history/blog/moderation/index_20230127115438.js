const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const axios = require( 'axios' );


const app = express();
app.use( bodyParser.json() );

// axios.post("http://localhost:4003/events", event).catch((err) => {
//   console.log(err.message);
// });

app.post( '/events', ( req, res ) =>
{
  const { type, data } = req.body;

  if ( type === "CommentCreated" )
  {
    const status = data.content.includes( 'orange' ) ? 'rejected' : 'approved';

    await axios.post( "http://localhost:4005/events" );

  }

} );

app.listen( 4003, () =>
{
  console.log( "Listenting on 4003" );
} );