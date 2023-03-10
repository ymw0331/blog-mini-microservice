import React, { useState } from 'react';
import axios from 'axios';

export default function PostCreate ()
{

  const [ title, setTitle ] = useState( '' );

  return (
    <div>
    <form
      <div className="form-group">
        <label>Title</label>
        <input
          value={ title }
          onChange={ e => setTitle( e.target.value ) }
          className="form-control" />
      </div>

      <button className="btn btn-primary">Create</button>
    </div>
  );
}
