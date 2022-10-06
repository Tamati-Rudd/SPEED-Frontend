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
    //const [submitted, setSubmitted] = useState("");


// testing useeffect with error handling
    // useEffect(() => {
    //     const getArticle = async() =>{
    //         // try{

    //             const res = await axios.get(`http://localhost:4000/articles/view/${year}`)
    //             if (res.status === 200){
    //                 setArticle(res.data);
    //             }
    //             if (res.status === 404){
    //                 alert("Error getting article");
    //             }
    //         }
    //         // }catch(e){

    //         //     if    (setArticle() !== []){
    //         //         alert("Error getting article");
    //         //     }
    //         // }
    //          //location of the article and submitted is the input from the user

    //     }
    //     getArticle();
    // }, [year])


    //working use effect
    useEffect(() => {
        const getArticle = async() =>{
            const res = await axios.get(`http://localhost:4000/articles/view/${year}`)
                setArticle(res.data);
         } //location of the article and submitted is the input from the user

        getArticle();
    }, [year])

    //this is to grab the data entered from the user and set it into the year const
       const onChangeYear = (event) => {
            setYear(event.target.value);
        }

        // function checkerArticle (){
        // if    (res.data === []){
        //         alert("Error getting article");
        //     }
        // }

        
        
    
// the article map is used to display each column on the data that is stored in the collection
// note for columns that do not store data it will be displayed as empty currently
//<button onClick={onClickSubmit}>Search</button> 
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
         <ArticleTable data={article} columns={tableColumns}/>
        </Box>
    </Box>
    )
}
