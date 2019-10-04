import React, { Component } from 'react';
import posed from 'react-pose';
import styled from 'styled-components'
import PropTypes from 'prop-types';

const Box = styled.tr`
    color: white;
`

const StyledBox = posed(Box)({
    hidden: { opacity: 0, x: 500 },
    visible: { opacity: 1, x: 0 }
});

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animate: false
        }
    }

    componentDidMount() {
        this.setState({
            animate: true
        })
    }

    render() {
        return (
            <StyledBox key={this.props.index} pose={this.state.animate ? 'visible' : 'hidden'}>
                <td>{this.props.url}</td>
                <td><a rel="noopener noreferrer" href={`http://localhost:9000${this.props.shorturl}`} target="_blank">{`http://localhost:9000${this.props.shorturl}`}</a></td>
            </StyledBox>
        );
    }
}

export default ListItem;

ListItem.propTypes = {
    url: PropTypes.string,
    shorturl: PropTypes.string,
}