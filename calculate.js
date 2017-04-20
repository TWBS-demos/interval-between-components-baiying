import {render} from "react-dom";
import React from "react";
import Child from "./Child";

class Calculate extends React.Component {

    constructor() {
        super();
        this.state = {
            name: 'parent',
            age: 30
        }
    }

    render() {
        return <div>
            <h1>parent</h1>
            <p>{this.state.name}的年龄为{this.state.age}岁</p>
            <Child pname={this.state.name} page={this.state.age}/>
        </div>;
    }
}

module.exports = Calculate;

