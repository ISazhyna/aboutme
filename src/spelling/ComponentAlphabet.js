import React, { Component } from 'react';

export class ComponentAlphabet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      spelled: '',
      fromJson: [],
     
    };

    this.handleChange = this.handleChange.bind(this);
    this.getSpelled = this.getSpelled.bind(this);
  }

  componentDidMount() {
    this.fetchAlphabet();
  }

  fetchAlphabet = () => {
    fetch('./natoalphabet.json', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }})
    .then(response => {
        return response.json()
    })
    .then(data => {
      // Work with JSON data here
      this.setState({ 
        fromJson:data
      }
      )
    })
    .catch((err) => console.log(err))
}

getSpelled(state) {
  console.log(this.state.value);
  let spelled='';
  [...state.value].forEach(char => {
    spelled=spelled.concat(state.fromJson["Nato"][char]+" ");
    return this.setState({spelled:spelled})
})
}

  handleChange=(event)=>{
    this.setState(
      {
         value: event.target.value,
      },  
      () => this.getSpelled(this.state) //callback
    );
  }


  render() {
    return (
      <div>
        <form>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
      <h1>{this.state.spelled}</h1>
      </div>
    );
  }
}

export default ComponentAlphabet;
