import React, { Component } from 'react';

class Input extends Component {
    render() {  
        const style = {
            width: this.props.width,
            backgroundColor: this.props.backColor
          }
        return (
            <input style={style}> 
            </input>
        );
    }
}

export default Input;
