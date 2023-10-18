import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Display() 
{

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get/comments')
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Comments are listed below</h1>
      <ol>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name} :: {comment.body}</li>
        ))}
      </ol>
    </div>
  );
}

export default Display;
