import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	item: PropTypes.object.isRequired
}

function ListItem({item}){
	return <div><a href='#'>{item.title}<span>{item.timestamp}</span></a></div>;
}

ListItem.PropTypes = propTypes;
export default ListItem;