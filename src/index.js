import React from "react";
import ReactDOM from "react-dom";
import Masonry from "react-masonry-css";

import "./style.css";

function App (props) {
    var items = JSON.parse(document.getElementById("jspos").innerHTML);
    const breakpointColumnsObj = {
        default: parseInt(props.col),
        1100: 3,
        700: 2,
        500: 2
    };
    items = items.map(function (item) {
        return (
            <div key={item.src}>
                <img src={item.src} width="100%" />
            </div>
        );
    });
    return <Masonry breakpointCols={breakpointColumnsObj}>{items}</Masonry>;
}

const c = document.getElementById("imgal");
let cl = c.getAttribute('gridcol')
ReactDOM.render(<App col={cl} />, c);
