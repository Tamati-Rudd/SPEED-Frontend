import { React, useEffect, useState } from 'react';
import { submitArticle } from '../Express';

export default function SubmitArticle() {
    const [title, setTitle] = useState("");
    const [submitted, setSubmitted] = useState("");

    useEffect(() => {
        console.log(title);
    }, [title])

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    const onClickSubmit = () => {
        let result = submitArticle(title).then(() => {
            console.log(result);
            setSubmitted("Your article has been submitted for review!");
        })
        .catch(() => {
            console.error("An error occured");
            setSubmitted("An error occured while attempting to submit your article. Please try again later");
        })
        
    }

    return (
        <div>
            <form>
                <label htmlFor='title'>Author: </label>
                <input type="text" id="title" name="title" value={title} onChange={onChangeTitle}></input>
            </form>
            <button onClick={onClickSubmit}>Submit</button>
            <p>{submitted}</p>
        </div>
    )
}