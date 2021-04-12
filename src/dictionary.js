import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function handleResponse(response) {
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }
    
    function search(event) {
        event.preventDefault();
        alert(`Searching '${keyword}'...`);

        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }
    return(
        <div className="dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange}/>
            </form>
            <Results results={results} />
        </div>
    );
}