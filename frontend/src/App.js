import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from "./Counter"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ],
      highest_id: 3,
      inputValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }

  saveNewRestaurant = () => {
    var res_name = this.state.inputValue;
    if(res_name){
      var res = {id: this.state.highest_id, name: res_name, rating: 0}
      var new_res = this.state.restaurants;
      new_res.push(res)
      this.setState((prevState) => ({
        restaurants: new_res,
        highest_id: prevState.highest_id + 1,
        inputValue: ""}))
    }
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <Counter count={0}/>
        <Instructions complete={true}/>
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
        <label>
          Restaurant:
          <input type="text" value={this.state.inputValue} onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.saveNewRestaurant}className="btn">Save</button>
      </div>
    )
  }


}

export default App
