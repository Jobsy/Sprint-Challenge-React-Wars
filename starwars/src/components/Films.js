
import React from "react";


export const Films = function (props) {

    return (
        <>
            <div>
                <p><a href="{props.filmUrl}">{props.filmUrl}</a></p>
            </div>
        </>
    );
};

