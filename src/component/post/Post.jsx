import React from "react";
import { useParams,useSearchParams } from "react-router-dom";
const Post = ()=>{
    let {category,id} = useParams();
    const [searchPrams,setSearchParams] = useSearchParams();
    console.log(searchPrams.get("price"))
    console.log(searchPrams.get("name"))
    return (
        <>
        <h2>Welcome to post page <span style={{color:"red"}}>{category}</span></h2>
        <h2>Welcome to post page <span style={{color:"gray"}}>{id}</span></h2>
        </>
    )
}
export default Post;