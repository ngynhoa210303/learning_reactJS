import React, { useState } from "react";
import { Button, Modal } from "antd";

class DOMEvent extends React.Component {
  state = {
    name: "HOant",
    age: 16,
  };
  handleClickButton = () => {
    alert("Hoa nt dep dep");
  };
  handleOnchange = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    //modal
    const LocalizedModal = () => {
      const [open, setOpen] = useState(false);

      const showModal = () => {
        setOpen(true);
      };

      const hideModal = () => {
        setOpen(false);
      };

      return (
        <>
          <Button type="primary" onClick={showModal}>
            Modal
          </Button>
          <Modal
            title="Modal"
            visible={open}
            onOk={hideModal}
            onCancel={hideModal}
            okText="确认"
            cancelText="取消"
          >
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
            <p>Bla bla ...</p>
          </Modal>
        </>
      );
    };

    return (
      //onChange
      <div className="haha">
        <div>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnchange(event)}
          />
          My name is {this.state.name}{" "}
        </div>
        <button onClick={this.handleClickButton}>Click</button>
        <LocalizedModal />
      </div>
    );
  }
}

export default DOMEvent;
