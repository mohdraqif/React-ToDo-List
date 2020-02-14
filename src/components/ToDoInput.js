import React from 'react';

const ToDoInput = (props) => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={props.submit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <i className="fa fa-book" />
            </div>
          </div>
          <input type='text' className='form-control text-capitalize' 
              placeholder="add todo item" value={props.item} onChange={props.change}/>
        </div>
        <button type="submit" disabled={props.item ? false : true}
            className={
              props.editItem
                ? "btn btn-block btn-success mt-3"
                : "btn btn-block btn-primary mt-3 text-uppercase"}
        >
            {props.editItem ? "Edit item" : "Add item"}</button>
      </form>
    </div>
  );
}

export default ToDoInput;
