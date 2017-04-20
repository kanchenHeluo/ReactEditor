import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	item: PropTypes.object.isRequired
}
function DisplayItem({item}){
	var title = <div>{item.title}</div>
	var editor = <div><input value='edit' type='button'/><input value='delete' type='button'/></div>;
	var content = <div>{item.content}</div>

	return <div>{title}{editor}{content}</div>

}

DisplayItem.PropTypes = PropTypes;
export default DisplayItem;