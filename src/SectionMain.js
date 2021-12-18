import React, { Component } from 'react';
import './SectionMain.css';
import Button from "./Button"
import Input from "./Input"
import Message from "./Message"

class SectionMain extends Component {
  render() {
    return (
        <section className="SectionMain">
          <Message />
          <Input />
          <Button backColor="purple" width="50px"/>
        </section>

    );
  }
}

export default SectionMain;
