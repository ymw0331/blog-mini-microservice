import React, { useState } from 'react';

export default function CommentCrate ( { postId } )
{

  const [ content, setContent ] = useState( '' );

  return (
    <div >
      <form>

        <div className="form-group">
          <label>New Comment</label>
          <input
            value={ content }
            onChange={ e => setContent( e.target.value ) }
            className

          />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>


    </div>
  );
}
