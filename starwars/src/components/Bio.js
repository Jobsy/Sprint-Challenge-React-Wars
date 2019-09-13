
import React from "react";


export const Bio = function (props) {

    return (
        <>
            <ul>
                <li>Gender: {props.gender}</li>
                <li>{props.dob}</li>
                <li>{props.height}</li>
                <li>{props.hair}</li>
                <li>{props.skin}</li>
                <li>{props.eye}</li>
            </ul>
        </>
    );
};

