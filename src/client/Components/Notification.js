import React, { Component } from 'react';
import Form from './Form';
import './Notification.css'
export default class Notification  extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
        <div className="notification">
            <Form />
        </div>
        );
    }
}
 