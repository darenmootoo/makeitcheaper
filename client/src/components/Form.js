import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
text-align: center;
margin: 20px 20px 100px 20px;
`

const StyledInput = styled.input`
border-radius: 10px;
font-size: 20px;
margin-right: 10px;
`

const StyledButton = styled.button`
border-radius: 10px;
font-size: 20px;
`

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            url: 'http://'
        }
    }

    render() {
        return (
                <StyledForm data-test="form-component">
                    <StyledInput data-test="input-field" type="text" onChange={(e)=> this.handleChange(e)} defaultValue={this.state.url}/>
                    <StyledButton type="submit">Submit</StyledButton>
                </StyledForm>
        );
    }
}

export default FormComponent;
