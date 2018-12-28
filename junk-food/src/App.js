import React, { Component } from 'react';
import './App.css';
import AutoComplete from 'react-autocomplete';
import FoodDetails from './component/FoodDetails';

//getting images from local
import image1 from './assets/images/burger.jpeg'
import image2 from './assets/images/rolls.jpeg'
import image3 from './assets/images/pizza.jpeg'
import image4 from './assets/images/pastries.jpeg'


//setting static json data for the operations
const jsonData = [
  {
    id: 1,
    name: 'Burger',
    image: image1,
    calorieIntake: 3,
    fat: 4,
    sugar: 5
  },
  {
    id: 2,
    name: 'Rolls',
    image: image2,
    calorieIntake: 4,
    fat: 3,
    sugar: 5
  },
  {
    id: 3,
    name: 'Pizza',
    image: image3,
    calorieIntake: 7,
    fat: 9,
    sugar: 90
  },
  {
    id: 4,
    name: 'Pastries',
    image: image4,
    calorieIntake: 7,
    fat: 3,
    sugar: 9
  }
]


class App extends Component {
  //constructor function
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      junk: jsonData,
      singleObject: null,
      input: false
    }
    // Bind `this` context to functions of the class
    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  //onchange: this function which will be active when you enter the value in text box
  onChange(e) {
    this.setState({ value: e.target.value })
    if (!e.target.value) {
        this.setState({ //setting state to default if no value is there in input
          singleObject: null,
          input: true
        });
    }
  }
//onSelect: this is where you selects value
  onSelect(val){
    const junkFood =  this.state.junk.filter((junk) => {
      return junk.name === val;
    });
    console.log(junkFood);
    
    this.setState({ //setting state again
      value: val,
      singleObject: junkFood
    })
  }

  //this function renders dropdown when you input is active
  renderItemhandler (item, highlighted) {
    return (
      <div
        key={item.id}
        style={{ backgroundColor: highlighted ? '#eee' : 'transparent', cursor:"pointer"}}
        >
        {item.name}
      </div>
    );
  }


  render() {
    return (
      <div>
        <div className="App">
          <p><strong>Junk Food</strong></p>
          <AutoComplete
              items={this.state.junk}
              shouldItemRender={(item, value) => item.name.toLowerCase().indexOf(value.toLowerCase()) > -1}
              getItemValue={item => item.name}
              renderItem={this.renderItemhandler}
              value={this.state.value}
              onChange={this.onChange}
              onSelect={this.onSelect}
            />
          </div>
          <div className="Details">
          <FoodDetails
            singleItem={this.state.singleObject}
            junk={this.state.junk}/>
          </div>
      </div>
    );
  }
}

export default App;
