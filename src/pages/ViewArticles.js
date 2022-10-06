import { React, useEffect, useState } from 'react';
import { Box} from "@mui/material";
import ArticleTable from "../components/Table";
import { tableColumns } from "../components/tableColumns";
//import { ViewArticle } from '../Express';
import axios from 'axios';

export default function ViewArticles() {
    //currently using useEffect to get the articles from the collection without useing express.js
    //currently displays the messages to the article page when serached with the correct data

    const [year, setYear] = useState("");
    const [article, setArticle] = useState([]);  
    const [submitted, setSubmitted] = useState("");

    useEffect(() => {
        const getArticle = async() =>{
            const res = await axios.get(`http://localhost:4000/articles/view/${submitted}`); //location of the article and submitted is the input from the user
            setArticle(res.data);
        }
        getArticle();
    }, [submitted])

       const onChangeYear = (event) => {
        setYear(event.target.value);
    }

  
    
    const onClickSubmit = (e) => {
        setSubmitted(year)
    }
    
// the article map is used to display each column on the data that is stored in the collection
// note for columns that do not store data it will be displayed as empty currently
    return (
        <Box
      sx={{
        bgcolor: "#fff",
        margin: "12px",
        padding: "16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
        <h1>Articles</h1>
        <Box>
        <form>
                <label htmlFor='year'>Publication Year: </label>
                <input type="text" id="year" name="year" value={year} onChange={onChangeYear}></input>
            </form>
            <button onClick={onClickSubmit}>Search</button> 
        <ArticleTable
            data={article}
            columns={tableColumns}
          />
        </Box>
    </Box>
    )
}
