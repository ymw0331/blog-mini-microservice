import React, { useState } from 'react';
ax

export default function CommentCrate ( { postId } )
{

  const [ content, setContent ] = useState( '' );

  const onSubmit = async ( event ) =>
  {
    event.preventDefault();
    await axios.post( `http://localhost:4001/posts/${ postId }/comments`,{

    } );

  };

  return (
    <div >
      <form onSubmit={ onSubmit }>

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
