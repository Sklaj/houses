import React from "react";
import PropTypes from "prop-types";

export const OneImageContainer = (props) => {
    return (
        <div className="content-wrapper">
            <div className="image-wrapper" style={{
                backgroundImage: `url(${props.imageUrl})`
            }}>
                {props.imageText && props.imageText}
            </div>
        </div>
    );
};

OneImageContainer.propTypes = {
    imageUrl: PropTypes.string,
    imageText: PropTypes.string
};