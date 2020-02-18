import React, { Component } from 'react';
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList';
import uuid from 'uuid';

export default class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }

  // Event handlers with props 

  submitHandler = (e) => {
    e.preventDefault()

    const newItem = {
      id: this.state.id,
      item: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }
  
  editHandler = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
        
    this.setState({
      items: filteredItems,
      item: selectedItem.item,
      id: id,
      editItem: true
    })
  }

  changeHandler = (e) => {
    this.setState({
      item: e.target.value
    })
  }
  
  deleteHandler = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    })
  }

  clearlistHandler = () => {
    this.setState({
      items: []
    });
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>
            <ToDoInput submit={this.submitHandler} editItem={this.state.editItem} 
              change={this.changeHandler} item={this.state.item} />

            <ToDoList delete={this.deleteHandler} clear={this.clearlistHandler} 
              edit={this.editHandler} change={this.changeHandler} items={this.state.items}
            />
          </div>
        </div>
      </div>
    );
  }
}
