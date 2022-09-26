import { React, useEffect, useState } from 'react';
import { ViewArticle } from '../Express';

export default function ViewArticles() {
  // need to find how to retrieve data from database and display it
  // currerntly there is no retrieve 
  // so far the connection from backend is not retrieveing the data from the collection this can be seen in the "inspect" on (browser)
  // following this there needs to be a clear display of data to the page 
  // currently there is nothing that display the data to the page
    const [title, setTitle] = useState("");
    const [submitted, setSubmitted] = useState("");

    useEffect(() => {
        console.log(title);
    }, [title])

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onClickSubmit = () => {
        let result = ViewArticle(title).then(() => {
            console.log(result);
            setSubmitted(title); //this is displayed when pressing the serach button
        })
        .catch(() => {
            console.error("An error occured");
            setSubmitted("An error occured while attempting to submit your article. Please try again later");
        })
        
    }

    return (
        <div>
            <form>
                <label htmlFor='title'>Title: </label>
                <input type="text" id="title" name="title" value={title} onChange={onChangeTitle}></input>
            </form>
            <button onClick={onClickSubmit}>Search</button> 
            <p>{submitted}</p>
        </div>
    )
}

