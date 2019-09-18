import React from "react";
import { TextContainer } from "./partials/TextContainer";
import { OneImageContainer } from "./partials/OneImageContainer";

export class TodoList extends React.Component {
    render() {
        return (
            <main className="main-wrapper">
                <TextContainer
                    headingText="kilka słów o nas"
                    subHeadingText="czyli kim jesteśmy i dokąd zmierzamy"
                    paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus urna id consequat fermentum. Ut accumsan, risus nec tincidunt blandit, odio lectus blandit quam, id laoreet est lectus ut dui. Proin feugiat tristique felis ut suscipit. Maecenas ullamcorper dolor nibh, ut ornare lectus varius vitae. Donec varius augue vitae risus eleifend, dictum dapibus mi cursus. Nullam tincidunt hendrerit velit sit amet iaculis. In viverra sit amet erat eget bibendum. Nulla ornare et elit at sagittis. Donec id volutpat leo. Mauris odio arcu, dapibus quis risus vitae, finibus aliquet nunc. Curabitur pretium velit id tincidunt mollis. Vivamus accumsan dictum ligula, sed ultricies justo aliquam quis."
                />

                <div className="content-wrapper">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <OneImageContainer 
                    imageUrl="http://www.national-geographic.pl/media/cache/default_view/uploads/media/default/0012/70/nie-uwierzysz-jak-powstalo-najslynniejsze-zdjecie-einsteina-przeczytaj-historie.jpeg"
                />

                <TextContainer
                    headingText="Nasza oferta"
                    subHeadingText="Dowiedz się co możemy tobie zaoferować"
                    paragraphText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent cursus urna id consequat fermentum. Ut accumsan, risus nec tincidunt blandit, odio lectus blandit quam, id laoreet est lectus ut dui. Proin feugiat tristique felis ut suscipit. Maecenas ullamcorper dolor nibh, ut ornare lectus varius vitae. Donec varius augue vitae risus eleifend, dictum dapibus mi cursus. Nullam tincidunt hendrerit velit sit amet iaculis. In viverra sit amet erat eget bibendum. Nulla ornare et elit at sagittis. Donec id volutpat leo. Mauris odio arcu, dapibus quis risus vitae, finibus aliquet nunc. Curabitur pretium velit id tincidunt mollis. Vivamus accumsan dictum ligula, sed ultricies justo aliquam quis."
                />
            </main>
        );
    }
};
