import classes from './NewPost.module.css';
import { useState } from 'react';
import { useCallback } from 'react';
function NewPost() {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [isSaved, setIsSaved ] = useState(true);
  function updateTitleHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: enteredTitle,
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => 
      {
            setIsSaved(true);
            console.log(json)
      })
    setIsSaved(false);
    // Todo: Handle the creation of new posts and send new post data to https://jsonplaceholder.typicode.com/posts (via a POST) request
  }

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div>
        <label>Title</label>
        <input type="text" onChange={updateTitleHandler} value={enteredTitle} />
      </div>
      <button>{isSaved? "Save" : "Saving"}</button>
    </form>
  );
}

export default NewPost;
