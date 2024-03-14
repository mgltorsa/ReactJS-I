import React, { Component } from 'react'


export default class Mensaje_class_component extends Component {

    constructor(props) {
        super(props);
    }

    render() {

       

        return (
            <div>{`Hello this is the prop ${this.props.nombre}`}</div>
        )


    }


}
