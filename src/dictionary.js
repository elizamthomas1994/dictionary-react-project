import React, { useState } from "react";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
    function search(event) {
        event.preventDefault();
        alert(`Searching '${keyword}'...`);
    }
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return(
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
        </div>
    );
}