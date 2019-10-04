import React, { Component } from 'react';
import './App.css';
import FormComponent from './components/Form'
import ListDisplay from './components/ListDisplay'
import styled from 'styled-components';

const StyledH1 = styled.h1` 
  margin: 0;
  border-bottom: 1px solid grey;
  padding: 20px;
  background-color: #152642;
  color: white;
`

const StyledH2 = styled.h2` 
  text-align: center;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlArray: [],
      error: null
    }
  }

  handleSubmit = async (e, url) => {
    e.preventDefault()
    console.log(url);
  }

  render() {
    return (
      <div data-test='app-component'>
        <StyledH1>Shorten your URL!</StyledH1>
        <StyledH2 style={{ textAlign: 'center' }}>Please Enter a URL</StyledH2>
        <FormComponent handleSubmit={this.handleSubmit} />
        { <ListDisplay items={this.state.urlArray} /> }
      </div>
    );
  }
}

export default App;
