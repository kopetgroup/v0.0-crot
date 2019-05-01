/*import React from 'react'; 
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(<App />, document.getElementById('app'))
*/

import React from "react";
import ReactDOM from "react-dom";
import Masonry from "react-masonry-css";

import "./style.css";
function App () {
    var items = JSON.parse(document.getElementById("jspos").innerHTML);
    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 2
    };
    // Convert array to JSX items
    items = items.map(function (item) {
        return (
            <div key={item.src}>
                <img src={item.src} width="100%" />
            </div>
        );
    });
    return <Masonry breakpointCols={breakpointColumnsObj}>{items}</Masonry>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
