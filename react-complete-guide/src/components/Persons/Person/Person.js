import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import classes from './Person.css';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering .....');
        return (
        <Aux>
        /* <div className={classes.Person}> */
        <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
            <p key="i2">{this.props.children}</p>
            <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
            /*</div> */
        </Aux>
        );
    }


};

export default Person;