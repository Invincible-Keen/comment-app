import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Comments from './CommentsData'

class CommentApp extends Component{
	constructor () {
	    super();
	    // console.log("constructor", Comments);
	    this.state = {
	      comments: Comments.Data
	    }
	 }
	componentWillMount() {
		console.log("componentWillMount", Comments);
		this._loadComments();
	}
	componentDidMount() {
		console.log("this.state.", this.state);
	}
	_loadComments () {
	    let comments = localStorage.getItem('comments')
	    if (comments) {
			comments = JSON.parse(comments)

			let exportedComments = this.state.comments;
			//exportedComments.concat(comments);
			exportedComments = exportedComments.concat(comments);
			//this.setState({ comments })
			//this.setState({ comments: exportedComments })
			//this.setState({ exportedComments })
			this.setState({ whatever: exportedComments })
	    }
	}
	_saveComments(comments){
		localStorage.setItem('comments', JSON.stringify(comments));
	}
	
	handleSubmitComment (comment) {
		if (!comment) return
    	if (!comment.username) return alert('请输入用户名')
    	if (!comment.content) return alert('请输入评论内容')

	    console.log(comment);
	    console.log(this.state.comments);

		const comments = this.state.comments;
	    comments.push(comment);
	    this.setState({comments});
	    this._saveComments(comments);
	}
	handleDeleteComment(index){
		console.log(index);
		const comments = this.state.comments;
		comments.splice(index, 1);
		this.setState({comments});
	    this._saveComments(comments);
	}
	render(){
		// console.log("render", Comments);
		return(
			<div className='wrapper'>
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
				<CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
			</div>
		)
	}
	
}

export default CommentApp