import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import "./dictionary.css";
import axios from "axios";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePicResponse(response) {
        setPhotos(response.data.photos)
    }
    
    function search() {
        let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleDictionaryResponse);

        let picApiKey = "563492ad6f91700001000001a6a42a6fd5bf40b3bb29c33428f624d3";
        let picApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${picApiKey}`}
        axios.get(picApiUrl, { headers: headers }).then(handlePicResponse);
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
                    <h1>What word are you looking for?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} placeholder="Enter a word here!"/>
                    </form>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
        );
    }
    else {
        load();
    }
}