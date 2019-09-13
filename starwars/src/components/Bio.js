
import React from "react";


export const Bio = function (props) {

    return (
        <>
            <ul>
                <li>Gender: {props.gender}</li>
                <li>Date of Birth: {props.dob}</li>
                <li>Height: {props.height}</li>
                <li>Hair-Color: {props.hair}</li>
                <li>Skin-Color: {props.skin}</li>
                <li>Eye-color: {props.eye}</li>
            </ul>
        </>
    );
};

