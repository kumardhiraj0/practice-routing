import React, { useState } from "react";
import "./search.css"
import Sresult from "./Sresult";
const Search = ()=>{
    const [search,setSearch] = useState("");
    const handleSearch = (e)=>{
        setSearch(e.target.value);
        console.log(e.target.value)
    }
    return (
        <>
        <div className="searchbar">
            <input 
            type="text"
            placeholder="enter anything"
            onChange={handleSearch}
            value={search}
            />
            {search===""?null:<Sresult name={search}/>}
        </div>
        </>
    )
}
export default Search;