import React from "react";
import PropTypes from "prop-types";
import { OneImageContainer } from "./OneImageContainer";

export const FourImageContainer = (props) => {
    return (
        <div className="content-wrapper four-image-container">
            <OneImageContainer 
                imageText="Lorem ipsum dolor"
                imageUrl="https://bi.im-g.pl/im/af/01/16/z23074479V,Tylko-do-konca-lutego-w--Informacji-Turystycznej-w.jpg"
            />

            <OneImageContainer 
                imageUrl="https://i1.wp.com/okiemmaleny.pl/wp-content/uploads/2017/12/bagan-birma-okiem_maleny-mnich.jpg?resize=1019%2C800&ssl=1"
            />

            <OneImageContainer
                imageUrl="https://www.szerokikadr.pl/public/repozytorium/poradnik/201211/3/160_732388c2.jpg"
            />

            <OneImageContainer
                imageText="Lorem ipsum dolor"
                imageUrl="https://m.gadzetomania.pl/linda-2ea8e4a1ad854c2e572670a29e,750,470,0,0.jpg"
            />
        </div>
    );
};

FourImageContainer.propTypes = {
    imageUrl: PropTypes.string,
    imageText: PropTypes.string
};