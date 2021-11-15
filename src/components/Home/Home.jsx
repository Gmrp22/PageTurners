import React, {Component} from "react";
import Header from "./Header/Header";
import Information from "./Information/Information";
export default class Home extends Component {

    render(){
        return(
        <div>
        <Header />
        <Information />
        </div>)
    }
}