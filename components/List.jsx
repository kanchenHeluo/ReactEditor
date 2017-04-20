import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';

const propTypes = {
	items: PropTypes.object.isRequired
};

function List({items}){
	items = items.map(item => <ListItem key={item.id} item={item}/>)

	return <div>{items}</div>;
}

List.PropTypes = propTypes;
export default List;