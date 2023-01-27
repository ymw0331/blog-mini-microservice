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
            value={}
           />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>


    </div>
  );
}
