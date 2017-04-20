import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	item: PropTypes.object.isRequired
}

function EditorItem({item}){
	var title = <div>{item.title}</div>
	var publish = <div><input value='publish' type='button'/><input value='cancel' type='button'/></div>
	var content = <div><textarea defaultValue={item.content} onChange={alert('change')}/></div>
	return <div>{title}{publish}{content}</div>
}

EditorItem.PropTypes = propTypes;
export default EditorItem;