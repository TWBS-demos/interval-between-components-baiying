import React,{Component} from 'react';
import {Render} from "react-dom";

class Child extends Component{
    constructor(){
    super();
        this.state = {
            name:'Child',
            age:10
        }
    }

    render(){
        return <div>
            <h1>child</h1>
            <p>{this.state.name}的年龄为{this.state.age}岁</p>
            <p>{this.props.pname} {this.props.page}</p>
        </div>
    }
}

module.exports=Child;