
import React from "react";



export const Header = function (props) {

    return (
        <>
            <HeaderStyle>
                <h2>Warrior Name: {props.name}</h2>
            </HeaderStyle>
        </>
    );
};