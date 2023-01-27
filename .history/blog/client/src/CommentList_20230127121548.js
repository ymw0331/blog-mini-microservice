import React from 'react';

export default function CommentList ( { comments } )
{
  const renderedComments =
    comments.map( comment =>
    {
      let content;
      if ( comment.status === 'approved' )
      {
        content = comment.content;
      }

      if ( comment.satus = 'pending' )
      {
        content = 'This comment is awaiting moderation';
      }

      return (
        <li key={ comment.id } >
          { comment.content }
        </li> );
    } );


  return (
    <ul>
      { renderedComments }
    </ul>
  );
}
