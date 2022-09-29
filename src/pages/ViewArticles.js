import { React, useEffect, useState } from 'react';
//import { ViewArticle } from '../Express';// not sure how to use this
import axios from 'axios';

export default function ViewArticles() {
    //currently using useEffect to get the articles from the collection without useing express.js
    //currently displays the messages to the article page when serached with the correct data

    const [title, setTitle] = useState("");
    const [article, setArticle] = useState([]);  
    const [submitted, setSubmitted] = useState("");

    useEffect(() => {
        const getArticle = async() =>{
            const res = await axios.get(`http://localhost:4000/articles/view/${submitted}`); //location of the article and submitted is the input from the user
            setArticle(res.data);
        }
        getArticle();
    }, [submitted])

       const onChangeTitle = (event) => {
        setTitle(event.target.value);
    }

  
    
    const onClickSubmit = (e) => {
        setSubmitted(title)
    }
    
// the article map is used to display each column on the data that is stored in the collection
// note for columns that do not store data it will be displayed as empty currently
    return (
        <div>
            <form>
                <label htmlFor='title'>Title: </label>
                <input type="text" id="title" name="title" value={title} onChange={onChangeTitle}></input>
            </form>
            <button onClick={onClickSubmit}>Search</button> 
            <div >{submitted ? (article.map((a) => (<div key={a._id}>ID: {a._id}, TITLE: {a.title}</div>))) : (<p>awaiting search</p>)}</div>
        </div>
    )
}
