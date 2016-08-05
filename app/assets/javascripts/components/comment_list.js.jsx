var CommentList = React.createClass({
	
	render(){
		return(
			<div>
				{JSON.parse(this.props.comments).map(function(feedback){
					return <Comment key={feedback.id} rank={feedback.rank} comment={feedback.comment} user_id={feedback.user_id}/>;
				})}
			</div>
		);
	}

});