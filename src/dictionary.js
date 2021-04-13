import React, { useState } from "react";
import Results from "./Results";
import "./dictionary.css";
import axios from "axios";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response) {
        setResults(response.data[0]);
    }
    
    function search() {
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return(
            <div className="dictionary">
                <section>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} placeholder="Enter a word here!"/>
                    </form>
                </section>
                <Results results={results} />
            </div>
        );
    }
    else {
        load();
    }
}