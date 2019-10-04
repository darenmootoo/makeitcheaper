import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
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
  color: white;
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
    this.setState({
      error: null
    })
    try {
      const data = await axios.post('http://localhost:9000', {
        "url": url
      })
      const urlArrayCopy = this.state.urlArray
      urlArrayCopy.push(data.data)
      this.setState({
        urlArray: urlArrayCopy
      })
    } catch (error) {
      this.setState({
        error: error
      })
      console.log(error);
    }
  }

  render() {
    return (
      <div data-test='app-component'>
        <StyledH1>Shorten your URL!</StyledH1>
        <StyledH2 style={{ textAlign: 'center' }}>Please Enter a URL</StyledH2>
        <FormComponent handleSubmit={this.handleSubmit} />
        {!this.state.error && this.state.urlArray.length > 0 ? <ListDisplay items={this.state.urlArray} /> : this.state.error ? <StyledH2>Error in API!</StyledH2> : <StyledH2>Nothing to display yet!</StyledH2>}
      </div>
    );
  }
}

export default App;
