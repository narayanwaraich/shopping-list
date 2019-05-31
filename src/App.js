import React, {Component} from 'react';
import ListItem from './ListItem';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      shoppingItem: '',
      shoppingList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
    this.setState({ shoppingItem : e.target.value });
  }

  //  https://stackoverflow.com/a/26254086/1844139
  handleSubmit(e) {
    e.preventDefault();
    const {shoppingItem,shoppingList} = this.state;
    if(shoppingItem === '') return false;
    if(!shoppingList.includes(shoppingItem)) {
      this.setState({
        shoppingList: [...shoppingList, shoppingItem]
      });
    }
  }

  //  https://flaviocopes.com/how-to-remove-item-from-array/
  handleDelete(Item) {
    this.setState({
      shoppingList: this.state.shoppingList.filter(shoppingItem => shoppingItem !== Item)
    });
  }

  render(){
    return (
      <div className="InputForm">
        <form onSubmit={this.handleSubmit}>
          <input
            name="shoppingItem"
            value={this.state.shoppingItem}
            placeholder="Shopping Item"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
        <ol className="List">
        {this.state.shoppingList.map((Item) => {
          return(
            <ListItem key={Item} value={Item} onClick={this.handleDelete}/>
          );
        })}
        </ol>
      </div>
    );
  }
}

export default App;
