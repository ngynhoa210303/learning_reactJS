import React from "react";
import { toast } from "react-toastify";
class AddToDo extends React.Component {
  state = {
    title: "",
  };
  handelOnChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };
  //add
  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error(`Missing title's Todo!`);
      return;
      //if(undefined/null/empty) => false
    }
    let toDo = {
      id: Math.floor(Math.random() * 10000),
      title: this.state.title,
    };
    this.props.addNewTodo(toDo);
    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(event) => this.handelOnChangeTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </button>
      </div>
    );
  }
}
export default AddToDo;
