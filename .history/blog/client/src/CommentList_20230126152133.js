import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function CommentList ( { postId } )
{
  const [ comments, setComments ] = useState( [] );

  const fetchData = aysnc() => {
    const res = await axios.get( `` );
  }

  return (
    <div>CommentList</div>
  );
}