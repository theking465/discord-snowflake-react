import React from 'react';
import './App.css';
const snowflake = require('discord-snowflake');

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      inputValue:""
    }
    this.handleIdChange = this.handleIdChange.bind(this);
    this.isValidSnowflake = this.isValidSnowflake.bind(this);
    this.snowflakeDate = this.snowflakeDate.bind(this);
  }
  //let snowflakeDate = new Date(0);
  handleIdChange(event){
    console.log(event.target.value)
    this.setState({inputValue : event.target.value});
  }

  isValidSnowflake(id){
    if(id === "") return false;
    return id.match(/^[0-9]*$/) && !isNaN(this.snowflakeDate());
  }
  snowflakeDate(){
    return snowflake(this.state.inputValue);
  }

    render() {
      return(
        <div className = "root" >
          <h1 className="title">Discord snowflake</h1>
          <input className="input" value={this.state.inputValue} onChange={this.handleIdChange}></input>
          <div className="date">

          {this.isValidSnowflake(this.state.inputValue) ?
            <div className="valid">
              {this.snowflakeDate().toLocaleString()}
            </div>
            :
            <div className="invalid">
              invalid snowflake
            </div>
          }

          </div>
      </div>
      );
    }
}

export default App;