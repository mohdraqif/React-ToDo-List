import React from 'react';

const ToDoItem = (props) => {
  return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{props.title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={props.editItem}>
          <i className="fa fa-edit"></i>
          </span>
          <span className="mx-2 text-danger" onClick={props.deleteItem}>
            <i className="fa fa-trash" />
          </span>
        </div>
      </li>
  );
}

export default ToDoItem;
