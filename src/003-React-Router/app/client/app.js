var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
require('normalize.css');
require('style.less');
var React = require('react');
var ReactDom = require('react-dom');
var react_router_1 = require('react-router');
var history = require("history");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h1", null, "app"), React.createElement("div", null, React.createElement(react_router_1.Link, {"to": "/about"}, "about")), React.createElement("section", null, this.props.children)));
    };
    return App;
})(React.Component);
var About = (function (_super) {
    __extends(About, _super);
    function About() {
        _super.apply(this, arguments);
    }
    About.prototype.render = function () {
        return (React.createElement("div", null, React.createElement("h2", null, "About"), React.createElement("p", null, "this an about")));
    };
    ;
    return About;
})(React.Component);
ReactDom.render((React.createElement(react_router_1.Router, {"history": history.createHistory()}, React.createElement(react_router_1.Route, {"path": "/", "component": App}, React.createElement(react_router_1.Route, {"path": "about", "component": "About"})))), document.getElementById("app"));
//# sourceMappingURL=app.js.map