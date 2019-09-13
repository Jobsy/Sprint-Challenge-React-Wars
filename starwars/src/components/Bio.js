
import React from "react";


export const Bio = function (props) {

    return (
        <>
            <h4>Bio Data</h4>
            <div>
                <p>Gender: {props.gender}</p>
                <p>Date of Birth: {props.dob}</p>
                <p>Height: {props.height}</p>
                <p>Hair-Color: {props.hair}</p>
                <p>Skin-Color: {props.skin}</p>
                <p>Eye-color: {props.eye}</p>
            </div>
        </>
    );
};

