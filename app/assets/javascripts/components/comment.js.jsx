var Comment = React.createClass({
	propTypes: {
		user_id: React.PropTypes.integer,
		comment: React.PropTypes.string,
		rank: React.PropTypes.integer
	},

	render(){
	 return(
		 <div>
		 	
		 	let comment_header={d3.select('body').append('h1').text('Comments')};
		 	
		 	<div> User ID: {this.props.user_id} </div>
		 	<div> Comment: {this.props.comment} </div>
		 	<div> Rank: {this.props.rank}</div>
		 </div>
	 )
	}
});