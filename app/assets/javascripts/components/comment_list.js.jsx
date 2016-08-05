var CommentList = React.createClass({
	
	render(){
		return(
			<div>
				{JSON.parse(this.props.comments).map(function(feedback){
					return(<div> {feedback.comment}</div>);
				})}
			</div>
		);
	}

});