import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning"

export default function Results(props) {
    console.log(props.results);
    if (props.results) {
        return(
            <div className="Results">
                <h1>{props.results.word}</h1>
                {props.results.phonetics.map(function(phonetic,index) {
                    return(
                        <div key={index}>
                            <Phonetic phonetic={phonetic} />
                        </div>
                    )
                })}
                {props.results.meanings.map(function(meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    )
                })}
            </div>
        )
        }
    else {
    return null;
    }
}