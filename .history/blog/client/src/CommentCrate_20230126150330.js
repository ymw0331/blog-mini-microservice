import React from 'react';

export default function CommentCrate ( { postId } )
{
  return (
    <div >
      <form>

        <div className="form-group">
          <label>New Comment</label>
          <input />
        </div>

        <button className="btn btn-primary">Submit</button>
      </form>


    </div>
  );
}
