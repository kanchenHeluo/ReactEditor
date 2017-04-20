import React from 'react';
import List from '../List';
import CreateItem from '../CreateItem';
import DisplayItem from '../DisplayItem';
import EditorItem from '../EditorItem';


class Deskmark extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			articles: [{
				id: 1,
				title: 'article1',
				content: 'article1 content',
				timestamp: '2017-4-20'
			},{
				id: 2,
				title: 'article2',
				content: 'article2 content',
				timestamp: '2017-4-20'
			}
			],
			selectedArticleId: 1,
			displayOrEdit: 1
		}
	}

	render(){
		var selectedArticle = this.state.articles.find(n => n.id = this.state.selectedArticleId);
		return (<div><CreateItem /><List items = {this.state.articles}/><DisplayItem item={selectedArticle} /><EditorItem item={selectedArticle} /></div>);
	}
}

export default Deskmark;