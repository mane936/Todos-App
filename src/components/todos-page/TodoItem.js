import React, { PureComponent } from "react";
import { connect } from "react-redux";
import * as todosExtraActions from "../../redux/actions/todosExtraActions";
import PropTypes from "prop-types";
import {
  TodoItemPlace,
  TodoItemContainer,
  DraggableContainer,
  Separator,
  DraggableIcon,
  TodoItemWrap,
  TodoTitleWrap,
  DeleteTodo,
  SubItemsContainer,
} from "./TodoItem.elements.js";
import SubItemLayout from "./SubItemLayout";
import TextDisplay from "../common/TextDisplay";
import { dragTodo, dragElement } from "../_helpers/dragableElement";

export class TodoItem extends PureComponent {
  componentDidMount() {
    if (this.state.isNew) {
      this.props.markNewTodoCount(this.props.todo.id);
      //isNew = todo.isNew;
    }
    const todo = this.props.todo;
    const containerId = todo.id + "containerRef";
    const draggerId = todo.id + "draggerRef";
    dragTodo(draggerId, containerId);
    console.log("MOUNTED");
  }
  componentDidUpdate() {
    console.log("UPDATED");
  }
  state = {
    isNew: this.props.todo.isNew,
  };

  render() {
    const {
      todo,
      delTodo,
      getNewValue,
      checkErrors,
      markNewTodoCount,
    } = this.props;
    let absoluteTop;
    const calculateDrag = () => {
      console.log("SOMETHIN ELSE");
      const element = document.getElementById(todo.id + "containerRef");
      absoluteTop = element.offsetTop;
      console.log("ABSOLUTE TOP: ", absoluteTop);
      //		document.getElementById(this.containerId)
    };
    return (
      <TodoItemPlace id={todo.id + "containerRef"} absoluteTop={absoluteTop}>
        <TodoItemContainer>
          <DraggableContainer
            id={todo.id + "draggerRef"}
            onClick={() => calculateDrag()}
          >
            <DraggableIcon />
            <Separator />
          </DraggableContainer>
          <TodoItemWrap>
            <TodoTitleWrap>
              <div style={{ cursor: "pointer", width: "100%" }}>
                <TextDisplay
                  text={todo.title}
                  isNew={this.state.isNew}
                  fontSize={"20px"}
                  getNewValue={getNewValue}
                  todoId={todo.id}
                  checkErrors={checkErrors}
                />
              </div>
              <div>
                <DeleteTodo onClick={() => delTodo(todo)} />
              </div>
            </TodoTitleWrap>
            <SubItemsContainer>
              <SubItemLayout todo={todo} />
            </SubItemsContainer>
          </TodoItemWrap>
        </TodoItemContainer>
      </TodoItemPlace>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  delTodo: PropTypes.func.isRequired,
  getNewValue: PropTypes.func.isRequired,
  checkErrors: PropTypes.func.isRequired,
  markNewTodoCount: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownState) {
  const id = ownState.id;
  const stateTodos = state.todos;
  return {
    todo: stateTodos.filter((todo) => id.includes(todo.id))[0],
  };
}

const mapDispatchToProps = {
  markNewTodoCount: todosExtraActions.markNewTodoCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
