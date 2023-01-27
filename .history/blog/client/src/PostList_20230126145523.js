import React, { useState } from 'react';
import axios from 'axios';

export default function PostList ()
{

  const [ post, setPosts ] = useState( {} );

  const fetchPosts = async () =>
  {
    const res = await axios.get( 'http://localhost:4000/posts' );
    setPosts( res.data );
  };

  return (
    <div>


    </div>
  );
}
