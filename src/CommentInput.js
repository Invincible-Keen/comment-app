import React, { Component } from 'react'


class CommentInput extends Component{
	constructor () {
	    super()
	    this.state = {
	      username: '',
	      content: ''
	    }
	}
	componentWillMount () {
    	this._loadUsername()
  	}

 	_loadUsername () {
	    const username = localStorage.getItem('username');
	    if (username) {
	      	this.setState({ username});//{username} <==> {"username": username}
	    }
	}
	handleUsernameChange (event) {
	    this.setState({
	      username: event.target.value
	    });
	}
	handleContentChange(event){
		this.setState({
			content: event.target.value.toUpperCase()
		});
	}
	handleSubmit () {
    if (this.props.onSubmit) {
			//const { username, content } = this.state;
	      	this.props.onSubmit({
	      		username: this.state.username,
        		content: this.state.content,
        		createdTime: +new Date()
	      	});
	    }
	    this.setState({ content: '' })
	}

	_saveUsername (username) {
    	localStorage.setItem('username', username)
	}

  	handleUsernameBlur (event) {
    	this._saveUsername(event.target.value)
  	}

  	handleKeydown(event){
  		// console.log(event.key);
  		if(event.key === "Enter"){
    		event.preventDefault();
    		this.handleSubmit ();
  		}
  	}

  	componentDidMount() {
		this.textarea.focus();
		// console.log("state: ", this.state);
	}
	render(){
		return(
			<div className='comment-input'>
				<div className='comment-field'>
					<span className='comment-field-name'>用户名：</span>
					<div className='comment-field-input'>
						<input value = {this.state.username} onChange={this.handleUsernameChange.bind(this)} onBlur={this.handleUsernameBlur.bind(this)} />
					</div>
				</div>
				<div className='comment-field'>
					<span className='comment-field-name'>评论内容：</span>
					<div className='comment-field-input'>
						<textarea ref={(ta)=>this.textarea = ta} value={this.state.content} 
							onChange={this.handleContentChange.bind(this)}
							onKeyDown={this.handleKeydown.bind(this)} />
					</div>
				</div>
				<div className='comment-field-button'>
					<button onClick={this.handleSubmit.bind(this)}>发布</button>
				</div>
	      </div>
		)
	}
}

export default CommentInput