import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CommentList ( { postId } )
{
  const [ comments, setComments ] = useState( [] );

  const fetchData = async () =>
  {
    const res = await axios.get( `http://localhost:4001/posts/${postId}/comments` );

  };




  return (
    <div>CommentList</div>
  );
}
