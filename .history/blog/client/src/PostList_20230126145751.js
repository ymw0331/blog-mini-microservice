import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function PostList ()
{

  const [ posts, setPosts ] = useState( {} );

  const fetchPosts = async () =>
  {
    const res = await axios.get( 'http://localhost:4000/posts' );
    setPosts( res.data );
  };

  useEffect( () =>
  {
    fetchPosts();
  }, [] );


  const renderedPOsts = Object.values( posts ).map( post =>
  {
    return <div className='card' style={ { width: "30%", marginBotton: '20px' } }></div>;
  } );

  return (
    <div>


    </div>
  );
}