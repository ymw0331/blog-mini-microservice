import React, { useState } from 'react';

export default function CommentCrate ( { postId } )
{

  const [ content, setContent ] = useState( '' );

  const onSubmit 

  return (
    <div >
      <form onSubmit={onSubmit}> 

        <div className="form-group">
          <label>New Comment</label>
          <input
            value={ content }
            onChange={ e => setContent( e.target.value ) }
            className="form-control"
          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>


    </div>
  );
}
