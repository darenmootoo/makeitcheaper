import React from 'react';
import ListItem from '../components/ListItem'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const StyledTable = styled.table`
text-align: left;
width: 100%;
table-layout: fixed;
font-size: 20px;
`

const StyledDiv = styled.div`
max-height: 40vh;
overflow: scroll;
background-color: grey;
max-width: 50vw;
margin: 0 auto;
border-radius: 10px;
`

const ListDisplay = (props) => {
    return (
        <StyledDiv>
            <StyledTable data-test="list-display">
                <thead style={{ border: "1px solid black" }}>
                    <tr>
                        <th>URL</th>
                        <th>Short URL</th>
                    </tr>
                </thead>
                <tbody>
                    {props.items.map((item, index) => (
                        <ListItem url={item.url} shorturl={item['short-url']} key={index} />
                    ))}
                </tbody>
            </StyledTable>
        </StyledDiv>
    );
}

export default ListDisplay;

ListDisplay.propTypes = {
    items: PropTypes.array
}