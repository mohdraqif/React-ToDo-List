import React from 'react';
import ToDoItem from './ToDoItem'

const ToDoList = (props) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {props.items.map(event => {
        return (
          <ToDoItem key={event.id} title={event.item} 
            deleteItem={() => props.delete(event.id)} 
            editItem={() => props.edit(event.id)} />
        )
      })}
      <button type="button" className="btn btn-danger btn-block text-uppercase mt-5" onClick={props.clear}>clear list</button>
    </ul>
  );
}

export default ToDoList;
