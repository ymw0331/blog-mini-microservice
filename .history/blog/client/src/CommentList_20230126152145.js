import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CommentList ( { postId } )
{
  const [ comments, setComments ] = useState( [] );

  const fetchData = aysnc() => {
    const res = await axios.get( `http://localhost:4001/posts/123/comments` );
  }

  return (
    <div>CommentList</div>
  );
}