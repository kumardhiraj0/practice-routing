import React from "react";
const Sresult = (props)=>{
    const imgUrl = `https://source.unsplash.com/400x300/?${props.name}`;
    return (
        <>
        <div>
            <img src={imgUrl} alt="imageapi"/>
        </div>
        </>
    )
}
export default Sresult;