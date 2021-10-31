import React, {Component} from 'react'
import Card from './CreateCard/Card'
import './style.css'
export default class  CrearBiblio extends Component {
    render(){
        return (<div className="create">
            <h1> Crear biblioteca </h1>
            <Card/>
             </div>)
    }
}
