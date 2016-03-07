/// <reference path="./interfaces/interfaces.d.ts" />

import * as React from "react";
import {render} from "react-dom";

/**
 * HelloWorld
 */
class HelloWorld extends React.Component<any, any> {
    render() {
        return <div>Hello World!</div>;
    }
}

render(
    <HelloWorld />,
    document.getElementById("root")
);

