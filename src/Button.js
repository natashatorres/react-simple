import React, { Component } from 'react';

class Button extends Component {
    render() {  
        const style = {
            width: this.props.width,
            backgroundColor: this.props.backColor
          }
        return (
            <button style={style}> Add
            </button>
        );
    }
}

export default Button;
