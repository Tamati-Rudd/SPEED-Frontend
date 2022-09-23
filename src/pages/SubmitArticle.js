import { React, useEffect, useState } from 'react';

export default function SubmitArticle() {
    const [title, setTitle] = useState("");

    useEffect(() => {
        console.log(title);
    }, [title])

    const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

    return (
        <div>
            <form>
                <label htmlFor='title'>Author: </label>
                <input type="text" id="title" name="title" value={title} onChange={onChangeTitle}></input>
            </form>
        </div>
    )
}