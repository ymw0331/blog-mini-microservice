const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const axios = require( 'axios' );


const app = express();
app.use( bodyParser.json() );

app.post( '/events', ( req, res ) =>
{
  const event = req.body;
  axios.post( 'http://localhost:4000/events', event ).catch( ( err ) =>
  {
    console.log( "post error ==>", err.message );
  } );
  axios.post( 'http://localhost:4001/events', event ).catch( ( err ) =>
  {
    console.log( "comment error ==>", err.message );
  } );
  axios.post( 'http://localhost:4002/events', event ).catch( ( err ) =>
  {
    console.log( "query error ==>", err.message );
  } );

  axios.post( "http://localhost:4003/events", event ).catch( ( err ) =>
  {
    console.log( "moderation error ==>", err.message );
  } );

  res.send( { status: 'OK' } );


} );


app.listen(4002, async () => {
  console.log("Listening on 4002");
  try {
    const res = await axios.get("http://localhost:4005/events");
 
    for (let event of res.data) {
      console.log("Processing event:", event.type);
 
      handleEvent(event.type, event.data);
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.listen( 4005, () =>
{
  console.log( "Listening on port 4005" );
} );