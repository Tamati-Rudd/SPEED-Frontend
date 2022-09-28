import { React, useEffect, useState } from 'react';
import { moderateArticle } from '../Express';

export default function ModerateArticle() {
<<<<<<< Updated upstream
    // testing page currently not working properly  
=======
    // testing page currently not working properly
    
>>>>>>> Stashed changes
    //so far backend can retrieve data 
    //needs to be displayed to the frontend on the viewarticle page
    //setSubmitted is the text that gets displayed
    //title is the message that is sent into 
    // data is stored in localhost4000:article/view data needs to be displayed at localhost3000:articles/view

    const [title, setTitle] = useState("");
    const [submitted, setSubmitted] = useState("");

    useEffect(() => {
        console.log(title);
    }, [title])

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onClickSubmit = () => {
        let result = moderateArticle(title).then(() => {
            console.log(result);
            setSubmitted(submitted); //this is displayed when pressing the serach button
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
<<<<<<< Updated upstream
            <button onClick={onClickSubmit}>Moderate</button> 
=======
            <button onClick={onClickSubmit}>Search</button> 
>>>>>>> Stashed changes
            <p>{submitted}</p>
        </div>
    )
}