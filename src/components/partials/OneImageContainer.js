import React from "react";
import PropTypes from "prop-types";

export const OneImageContainer = (props) => {
    return (
        <div className="content-wrapper image-container">
            <div className="image-wrapper" style={{
                backgroundImage: `url(${props.imageUrl})`
            }}/>
        </div>
    );
};

OneImageContainer.propTypes = {
    imageUrl: PropTypes.string
};