import React from "react";
import PropTypes from "prop-types";

export const TextContainer = (props) => {
    return (
        <div className="content-wrapper text-container">
            <h1 className="heading">
                {props.headingText}
            </h1>

            <h2 className="subheading">
                {props.subHeadingText}
            </h2>

            <p className="paragraph">
                {props.paragraphText}
            </p>

            <button className="button" onClick={props.onClick}>
                Zobacz więcej
            </button>
        </div>
    );
};

TextContainer.propTypes = {
    onClick: PropTypes.func,
    headingText: PropTypes.string,
    subHeadingText: PropTypes.string,
    paragraphText: PropTypes.string
};